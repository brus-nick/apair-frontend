/**
 * Created by Борис on 28.03.2016.
 */
var DelApp = {
};

var updateDelApp = function(ev){

    console.log(ev.getAttribute('data-bind'));
    DelApp.ap_id = ev.getAttribute('data-bind');
    ApiarFactory().actions.delApiar();
};