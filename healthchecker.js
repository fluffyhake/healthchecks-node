var tcpp = require('tcp-ping');
 
tcpp.probe('192.168.50.1', 443, function(err, available) {
    console.log(available);
});
 
tcpp.ping({ address: '192.168.50.1', port: '443', attempts: "300" }, function(err, data) {
    console.log(data);
});



