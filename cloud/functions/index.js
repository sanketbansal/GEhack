const functions = require('firebase-functions');
const apiai = require("apiai")
const admin= require('firebase-admin')

admin.initializeApp()

exports.dialogflow = functions.https.onRequest((request, response) => {

    var app = apiai('861f8cbcae604ed79dfa264a2ff529aa')

    console.log(request)
    var req = app.textRequest(request.query.text , {
        sessionId: '<unique session id>'
    });

    req.on('response', function(res) {
        response.setHeader('Access-Control-Allow-Origin','*' );
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        response.send(res.result.fulfillment);
        console.log(res);
    });

    req.on('error', function(error) {
        response.send("Hello Mddaaa fckkaaa!");
        console.log(error);
    });

    req.end();
 
});

exports.firebase = functions.https.onRequest((request, response) => {
    //response.send(request.body);
    if(request.body.result.metadata.intentName==="trackid"){
        console.log("trackid")
        let msg=request.body.result.fulfillment.messages
        
        const id=request.body.result.resolvedQuery
        admin.database().ref('/GEhack/'+id).on('value',(snapshot)=>{
            console.log(snapshot.val())
            if(snapshot.val()===null){
                msg.push({"type":0,"speech":"Invalid Model number"})
            }
            else{
                var data=snapshot.val()
                var key
                for(key in data) {
                    msg.push({"type":0,"speech":`${key}: ${data[key]}`})
                }
            }
            response.send({"messages":msg})
        });
    }

    else if(request.body.result.metadata.intentName==="canceltrackid"){
        console.log("canceltrackid")
        let msg=request.body.result.fulfillment.messages
        const id=request.body.result.resolvedQuery

        let upd={}
        upd[id]={}
        admin.database().ref('/GEhack/').update(upd,(error)=>{
            if(error){
                console.log(error)
                msg.push({"type":0,"speech":"Server Error Please Try again"})
            }
            else{
                console.log(id)
                msg.push({"type":0,"speech":`Service Appointment for appliance ${id} has been cancelled`})
            }
            response.send({"messages":msg})
        });
    }

    else if(request.body.result.metadata.intentName==="rescheduletrackid"){
        console.log("rescheduletrackid")
        let msg=request.body.result.fulfillment.messages

        const id=request.body.result.resolvedQuery
        const val=request.body.result.contexts[1]
        console.log(val)

        admin.database().ref('/GEhack/'+id).on('value',(snapshot)=>{
            if(snapshot.val()===null){
                msg.push({"type":0,"speech":"Invalid Model number"})
                response.send({"messages":msg})
            }
            else{
                let upd={}
                let key=id+"/Timeslot"
                let value=val.parameters.date+" "+val.parameters.time
                upd[key]=value
                admin.database().ref('/GEhack/').update(upd,(error)=>{
                    if(error){
                        console.log(error)
                        //msg.push({"type":0,"speech":"Invalid Tracking id"})
                    }
                    else{
                        let text=`Thank you! your Service Appointment for appliance ${id} has been rescheduled to ${val.parameters.date} ${val.parameters.time}.`
                        msg.push({"type":0,"speech":text})
                    }
                    response.send({"messages":msg})
                });
            }
        });
    }
    else{
        console.log(request.body.result.metadata)
        console.log("No Intent Detected")
    }
});

exports.FormScript = functions.https.onRequest((request,response) =>{
    let upd={}
    upd=request.body

    let res=admin.database().ref('/GEhack/'+request.body.ModelNo+"/").set(upd,function(err){
        if(err){
            console.log(err)
            response.send("Error: "+err)
        }
        else{
            response.send("Sucess!")
        }
    })
});