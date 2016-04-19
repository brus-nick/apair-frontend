/**
 * Created by Борис on 28.03.2016.
 */
var ChangeApp = {
};

var updateChangeAppId = function(ev){
        console.log(ev.getAttribute('data-bind'));
        ChangeApp.ap_id = ev.getAttribute('data-bind');
    };

var updateChangeAppData = function(ev){
        console.log(ev.value);
        console.log(ev.getAttribute('data-bind'));
        ChangeApp[ev.getAttribute('data-bind')] = ev.value;
    };