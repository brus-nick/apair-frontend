/**
 * Created by ����� on 28.03.2016.
 */
var addHivesService = function() {

    var ap_id = "", isValid = false;


    return {
        addHivesValidation : function(ev) {

            isValid = false;

            if(ev.getAttribute("data-bind") == "ap_id"){
                ap_id = ev.value;
                updateAddHives(ev);
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
