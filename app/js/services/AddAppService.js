/**
 * Created by Борис on 28.03.2016.
 */
var addAppService = function() {

    var isValid = false, min_temp = "", max_temp = "",
        min_hum = "", max_hum = "";

    return {
        addAppValidation: function(ev) {

            isValid = false;

            if(ev.getAttribute("data-bind") == "min_temp"){
                if(controlTemp(ev)){
                    min_temp = ev.value;
                    updateAddApp(ev);
                    removeTooltip(ev);
                }
                else{
                    min_temp = "";
                    addTooltip(ev, 10);
                }
            }
            else if(ev.getAttribute("data-bind") == "max_temp"){
                if(controlTemp(ev)){
                    max_temp = ev.value;
                    updateAddApp(ev);
                    removeTooltip(ev);
                }
                else{
                    max_temp = "";
                    addTooltip(ev, 10);
                }
            }
            else if(ev.getAttribute("data-bind") == "min_hum"){
                if(controlHumid(ev)){
                    min_hum = ev.value;
                    updateAddApp(ev);
                    removeTooltip(ev);
                }
                else{
                    min_hum = "";
                    addTooltip(ev, 11);
                }
            }
            else if(ev.getAttribute("data-bind") == "max_hum"){
                if(controlHumid(ev)){
                    max_hum = ev.value;
                    updateAddApp(ev);
                    removeTooltip(ev);
                }
                else{
                    max_hum = "";
                    addTooltip(ev, 11);
                }
            }
        },
        isValidated: function(){
            if (min_temp.length == 0 || max_temp.length == 0 || min_hum.length == 0
                || max_hum.length == 0) {
                alert("Некоторые поля не заполнены или заполнены не корректно");
            }
            else {
                isValid = true;
            }
            return isValid}
    }
}();