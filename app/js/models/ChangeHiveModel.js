/**
 * Created by Борис on 19.04.2016.
 */
var ChangeHives = {
};

var updateChangeHiveId = function(ev) {
    console.log(ev.getAttribute('data-bind'));
    console.log(ev.value);
    ChangeHives.hive_id = ev.getAttribute('data-bind');
};

var updateChangeHivePhone = function(ev) {
    console.log(ev.getAttribute('data-bind'));
    console.log(ev.value);
    ChangeHives[ev.getAttribute('data-bind')] = ev.value;
};