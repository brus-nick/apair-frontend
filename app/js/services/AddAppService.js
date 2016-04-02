/**
 * Created by ����� on 28.03.2016.
 */
var addAppService = function() {

    var isValid = false, min_temp = "", max_temp = "",
        min_hum = "", max_hum = "";

    return {
        addAppValidation: function(ev) {

            isValid = false;

            if(ev.getAttribute("data-bind") == "min_temp"){
                min_temp = ev.value;
                updateAddApp(ev);
            }
            else if(ev.getAttribute("data-bind") == "max_temp"){
                max_temp = ev.value;
                updateAddApp(ev);
            }
            else if(ev.getAttribute("data-bind") == "min_hum"){
                min_hum = ev.value;
                updateAddApp(ev);
            }
            else if(ev.getAttribute("data-bind") == "max_hum"){
                max_hum = ev.value;
                updateAddApp(ev);
            }
            if (min_temp.length == 0 || max_temp.length == 0 || min_hum.length == 0
                || max_hum.length == 0) {
                console.log("�� ��������� �� ��� ����");
            }
            else {
                isValid = true;
            }
        },
        isValidated: function(){return isValid}
    }
}();