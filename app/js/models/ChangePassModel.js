/**
 * Created by Борис on 28.03.2016.
 */
var ChangePassUser = {
};

var updatePassUser = function(ev){

    console.log(ev.value);
    console.log(ev.getAttribute('data-bind'));
    ChangePassUser.pass = ev.value;
};