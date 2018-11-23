/*
    Date: 2016-02-23
*/
var app = {
    isCordovaApp : false,
    device       : {platform: 'note'},

    //
    showIt : function (id, msg) {
        document.getElementById(id).textContent = msg;
    },
    //
    onDOMContentLoaded : function () {
        // Detect if we are using Cordova/Phonegap or a browser.
        // https://videlais.com/2014/08/21/lessons-learned-from-detecting-apache-cordova/
        app.isCordovaApp = (typeof window.cordova !== "undefined");
        app.device       = {platform:'browser'};
        document.getElementById('exitApp').classList.add("hidden");
        // Toast example
        examples.makeToast();
        examples.loadButtonTrigger();
    },
    //
    onDeviceReady : function () {
        app.showIt('dbug','deviceready.');
        app.device       = {platform:'mobile'};
    }

};

var examples = {

    makeToast : function () {
        // setup the fadeout time
        jtoast.init({'timeout':3000});
        // update a message in the popup box
        app.showIt('timeouttime', parseInt(jtoast.timeout/1000));
        // show the message
        jtoast.fire();
    },
    //
    loadButtonTrigger : function () {
        document.getElementById('alertButton').addEventListener('click', function() {
            jtoast.init({'id':'alert','timeout':5000});
            jtoast.message({
               'message':'<p>This is another messge.<p>This works the with HTML inside it.<p>',
               'class':'alert',
            });
            jtoast.fire();
        });
        // REUSE The <div>.
        document.getElementById('customButton').addEventListener('click', function() {
            jtoast.fire({
               'id':'alert',
               'timeout':8000,
               'message':'This is another messge. <img src=dialog-error.png><br><br>This works the with <u>HTML</u> <b>inside</b> it.',
               'class':'custom',
            });
        });
    }

}


//
//    Entry Point
//
document.addEventListener('DOMContentLoaded', app.onDOMContentLoaded);
document.addEventListener('deviceready', app.onDeviceReady);
