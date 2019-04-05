const RippleAPI = require('ripple-lib').RippleAPI;
var fs = require('fs');
var csv = require('fast-csv');
let ctr = 0;
var read = fs.createReadStream('urls.csv')
.pipe(csv())
.on('data',function(data){
    for(let i = 0; i < data.length; i++){
      var url = "wss://" + data[i]+ ":51235";
      console.log("Trying for : " + url);
      const api = new RippleAPI({
        server: url
      });
      api.on('error', (errorCode, errorMessage) => {
        console.log(errorCode + ': ' + errorMessage);
      });
      api.on('connected', () => {
        console.log('connected');
      });
      api.on('disconnected', (code) => {
        // code - [close code](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent) sent by the server
        // will be 1000 if this was normal closure
        console.log('disconnected, code:', code);
      });
      api.connect().then(() => {
        console.log('getting server info');;
        return api.getServerInfo();
      }).then(info => {
        console.log(info);
        console.log('get server info done');
      }).then(() => {
        return api.disconnect();
      }).catch(function(error) {
        ctr++;
        console.log(ctr + ": error");
      });
    }
})
