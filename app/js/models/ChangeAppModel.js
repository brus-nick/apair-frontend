/**
 * Created by Борис on 28.03.2016.
 */
var ChangeApp = {
};

var updateChangeApp = function(ev){

    console.log(ev.value);
    console.log(ev.getAttribute('data-bind'));
    ChangeApp[ev.getAttribute('data-bind')] = ev.value;
};