/**
 * Created by Борис on 28.03.2016.
 */
var AddHives = {
};

var updateAddHives = function(ev) {
    console.log(ev.getAttribute('data-bind'));
    console.log(ev.value);
    AddHives.ap_id = ev.getAttribute('data-bind');
    AddHives.phone = ev.value;
};