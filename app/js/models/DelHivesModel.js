/**
 * Created by ����� on 28.03.2016.
 */
var DelHives = {
};

var updateDelHives = function(ev){

    console.log(ev.value);
    console.log(ev.getAttribute('data-bind'));
    DelHives[ev.getAttribute('data-bind')] = ev.value;
};