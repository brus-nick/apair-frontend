/**
 * Created by Борис on 28.03.2016.
 */
var AddHives = {
};

var updateAddHives = function(ev) {
    console.log(ev.value);
    console.log(ev.getAttribute('data-bind'));
    AddHives[ev.getAttribute('data-bind')] = ev.value;
};