/**
 * Created by Борис on 28.03.2016.
 */
var ChangeApp = {
};

var updateChangeApp = function(ev){

    if((ev.getAttribute('data-bind') != "min_temp") && (ev.getAttribute('data-bind') != "max_temp")
        && (ev.getAttribute('data-bind') != "min_hum") && (ev.getAttribute('data-bind') != "max_hum")){
        console.log(ev.getAttribute('data-bind'));
        ChangeApp.ap_id = ev.getAttribute('data-bind');
    }
    else {
        console.log(ev.value);
        console.log(ev.getAttribute('data-bind'));
        ChangeApp[ev.getAttribute('data-bind')] = ev.value;
    }
};