/**
 * Created by ����� on 28.03.2016.
 */
var delAppService = function() {

    var isValid = false, ap_id = "";

    return {
        delAppValidation: function(ev) {

            isValid = false;

            if(ev.getAttribute("data-bind") == "ap_id"){
                ap_id = ev.value;
                updateDelApp(ev);
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