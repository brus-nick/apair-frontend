/**
 * Created by Борис on 28.03.2016.
 */
var GetHives = {
};

var updateGetHives = function(ev){

    console.log(ev.getAttribute('data-bind'));
    GetHives.ap_id = ev.getAttribute('data-bind');
    HivesFactory().action.getHives();
};