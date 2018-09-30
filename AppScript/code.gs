function myFunction(data) {
  Logger.log(data);
  var items=data.response.getItemResponses();
  
  Logger.log(items);
  
  var resdat={}
 
  for(var i=0;i<items.length;i++){
    resdat[items[i].getItem().getTitle()]=items[i].getResponse();
    Logger.log(items[i].getItem().getTitle());
    Logger.log(items[i].getResponse());
  }
  
  headers={
    'Access-Control-Allow-Origin':'*'
  }
  params={
    'method':'post',
    'headers':headers,
    'contentType':'application/json',
    'payload':JSON.stringify(resdat)
  }
  var res=UrlFetchApp.fetch('https://us-central1-plachat-9a2af.cloudfunctions.net/FormScript',params);
  Logger.log(res);
}