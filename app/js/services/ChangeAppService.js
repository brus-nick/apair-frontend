/**
 * Created by Борис on 28.03.2016.
 */
var changeAppService = function() {

    var isValid = false, ap_id = "", min_temp = "", max_temp = "",
        min_hum = "", max_hum = "";

    return {
        changeAppValidation: function(ev) {

            isValid = false;

            if(ev.getAttribute("data-bind") == "ap_id"){
                ap_id = ev.value;
                updateChangeApp(ev);
            }
            else if(ev.getAttribute("data-bind") == "min_temp"){
                min_temp = ev.value;
                updateChangeApp(ev);
            }
            else if(ev.getAttribute("data-bind") == "max_temp"){
                max_temp = ev.value;
                updateChangeApp(ev);
            }
            else if(ev.getAttribute("data-bind") == "min_hum"){
                min_hum = ev.value;
                updateChangeApp(ev);
            }
            else if(ev.getAttribute("data-bind") == "max_hum"){
                max_hum = ev.value;
                updateChangeApp(ev);
            }
            if (ap_id.length == 0 || min_temp.length == 0 || max_temp.length == 0 || min_hum.length == 0
                || max_hum.length == 0) {
                console.log("Вы заполнили не все поля");
            }
            else {
                isValid = true;
            }
        },
        isValidated: function(){return isValid}
    }
}();