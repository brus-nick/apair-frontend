/**
 * Created by Борис on 25.03.2016.
 */
var RegisterUser = {
};

var updateRegisterUser = function(ev) {
    console.log(ev.value);
    console.log(ev.getAttribute('data-bind'));
    RegisterUser[ev.getAttribute('data-bind')] = ev.value;
   // console.log(User[name]);
};