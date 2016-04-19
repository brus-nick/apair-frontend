/**
 * Created by Борис on 28.03.2016.
 */
var DelHives = {
};

var updateDelHives = function(ev){

    console.log(ev.value);
    console.log(ev.getAttribute('data-bind'));
    DelHives.hive_id = ev.getAttribute('data-bind');
    HivesFactory().action.delHives();
};