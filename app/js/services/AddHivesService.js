/**
 * Created by Борис on 28.03.2016.
 */
var addHivesService = function() {

    var phone = "", isValid = false;


    return {
        addHivesValidation : function(ev) {

            isValid = false;

            if(controlPhone(ev)){
                phone = ev.value;
                updateAddHives(ev);
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
