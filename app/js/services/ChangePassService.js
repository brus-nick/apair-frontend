/**
 * Created by Борис on 25.03.2016.
 */
var authService = function() {

    var newPass = "", newPass2 = "",
        isValid = false;


    return {
        passValidation : function(ev) {

            isValid = false;
            if(ev.getAttribute("data-bind") == "newPass"){
                if(controlAuth(ev)){
                    newPass = ev.value;
                    updatePassUser(ev);
                    removeTooltip(ev);
                    if ((newPass.length < 6) && (newPass.length != 0)){
                        addTooltip(ev, 9);
                        newPass = "";
                    }
                }
                else{
                    removeTooltip(ev);
                    newPass = "";
                    addTooltip(ev, 7);
                }
            }
            else if(ev.getAttribute("data-bind") == "newPass2"){
                if(controlAuth(ev)){
                    newPass2 = ev.value;
                    updatePassUser(ev);
                    removeTooltip(ev);
                    if ((newPass2.length < 6) && (newPass2.length != 0)){
                        addTooltip(ev, 9);
                        newPass2 = "";
                    }
                }
                else{
                    removeTooltip(ev);
                    newPass2 = "";
                    addTooltip(ev, 7);
                }
            }
        },
        isValidated: function(){
            if (newPass.length == 0 || newPass2.length == 0 || (newPass != newPass2)) {
                alert("Некоторые поля не заполнены, либо заполнены не корректно");
            }
            else {
                isValid = true;
            }
            return isValid;
        }
    }
}();


