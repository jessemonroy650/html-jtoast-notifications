/*
    Date: 2018-11-24
*/
var app = {
    isCordovaApp : false,
    device       : {platform: 'none'},
    eventTarget  : 'click',
    //
    onDOMContentLoaded : function () {
        app.device       = {platform:'browser'};
        // Toast example
        document.getElementById('jtoastButton').addEventListener(app.eventTarget, function() {
            jtoast.fire({
               'message':'<p>This is another messge. <img src=dialog-error.png><br><br>This works the with <b>HTML</b> inside it.<p>'
            });
        });
    },
    //
    onDeviceReady : function () {
        app.isCordovaApp = (typeof window.cordova !== "undefined");
        app.device       = {platform:'mobile'};
        app.eventTarget  = 'touchend';
    }
};
//
//    Entry Point
//
document.addEventListener('DOMContentLoaded', app.onDOMContentLoaded);
document.addEventListener('deviceready', app.onDeviceReady);
