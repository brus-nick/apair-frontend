/**
 * Created by ����� on 28.03.2016.
 */
var getHivesService = function() {

    var isValid = false, ap_id = "";

    return {
        getHivesValidation: function(ev) {

            isValid = false;

            if(ev.getAttribute("data-bind") == "ap_id"){
                ap_id = ev.value;
                updateGetHives(ev);
            }
            if (ap_id.length == 0) {
                console.log("�� ��������� �� ��� ����");
            }
            else {
                isValid = true;
            }
        },
        isValidated: function(){return isValid}
    }
}();