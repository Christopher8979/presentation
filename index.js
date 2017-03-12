var express = require('express'),
    app = express(),
    port = 4040;

app.use(express.static('web-content'));


app.listen(port, function(err) {
    if (err) {
        console.log('error in running application');
    } else {
        console.log('App is running at localhost:' + port);
    }
});
