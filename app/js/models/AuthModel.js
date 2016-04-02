/**
 * Created by Борис on 25.03.2016.
 */
var AuthUser = {
};

var updateAuthUser = function(ev) {
    console.log(ev.value);
    console.log(ev.getAttribute('data-bind'));
    AuthUser[ev.getAttribute('data-bind')] = ev.value;
};