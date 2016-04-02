/**
 * Created by Борис on 28.03.2016.
 */
var AddApp = {
};

var updateAddApp = function(ev){

    console.log(ev.value);
    console.log(ev.getAttribute('data-bind'));
    AddApp[ev.getAttribute('data-bind')] = ev.value;
};