/**
 * Created by ����� on 28.03.2016.
 */
var delHivesService = function() {

    var isValid = false, hive_id = "";

    return {
        delHivesValidation: function(ev) {

            isValid = false;

            if(ev.getAttribute("data-bind") == "hive_id"){
                hive_id = ev.value;
                updateDelHives(ev);
            }
            if (hive_id.length == 0) {
                console.log("�� ��������� �� ��� ����");
            }
            else {
                isValid = true;
            }
        },
        isValidated: function(){return isValid}
    }
}();