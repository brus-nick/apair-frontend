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
                newPass = ev.value;
            }
            else if(ev.getAttribute("data-bind") == "newPass2"){
                newPass2 = ev.value;
            }
            if (newPass.length == 0 || newPass2.length == 0) {
                console.log("Вы заполнили не все поля");
            }
            else if (newPass != newPass2) {
                console.log("Данные введены не корректно");
            }
            else if (newPass.length < 6) {
                console.log("Введите более длинный пароль");
            } else {
                isValid = true;
                updatePassUser(ev);
            }
        },
        isValidated: function(){return isValid}
    }
}();


