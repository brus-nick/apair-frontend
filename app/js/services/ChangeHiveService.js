/**
 * Created by Борис on 19.04.2016.
 */
var changeHiveService = function() {

    var phone = "", isValid = false;


    return {
        changeHiveValidation : function(ev) {

            isValid = false;

            if(controlPhone(ev)){
                phone = ev.value;
                updateChangeHivePhone(ev);
                removeTooltip(ev);
            }
            else{
                phone = "";
                addTooltip(ev, 4);
            }
        },
        isValidated: function(){
            if (phone == ""){
                alert("Некоторые поля не заполнены или заполнены не корректно");
            }
            else{
                isValid = true;
            }
            return isValid
        }
    }
}();
