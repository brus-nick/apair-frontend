/**
 * Created by Борис on 05.05.2016.
 */
var DelRecord = {
};

var updateDelRecord = function(ev){

    console.log(ev.getAttribute('data-bind'));
    DelRecord.journal_id = ev.getAttribute('data-bind');
    JournalFactory().action.delRecord();
};