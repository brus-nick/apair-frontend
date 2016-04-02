/**
 * Created by Борис on 28.03.2016.
 */
var GetHives = {
};

var updateGetHives = function(ev){

    console.log(ev.value);
    console.log(ev.getAttribute('data-bind'));
    GetHives[ev.getAttribute('data-bind')] = ev.value;
};