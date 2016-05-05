/**
 * Created by Борис on 05.05.2016.
 */
var GetRecords = {
};

var updateGetRecords = function(ev){

    console.log(ev.getAttribute('data-bind'));
    GetRecords.hive_id = ev.getAttribute('data-bind');
    JournalFactory().action.getRecords();
};