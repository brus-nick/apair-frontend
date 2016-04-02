/**
 * Created by Борис on 28.03.2016.
 */
var DelApp = {
};

var updateDelApp = function(ev){

    console.log(ev.value);
    console.log(ev.getAttribute('data-bind'));
    DelApp[ev.getAttribute('data-bind')] = ev.value;
};