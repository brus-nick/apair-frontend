/**
 * Created by Борис on 28.03.2016.
 */
var authUserService = function() {

    var login = "", pass = "",
        isValid = false;


    return {
        authValidation : function(ev) {

            isValid = false;

            if(ev.getAttribute("data-bind") == "login"){
                login = ev.value;
                updateAuthUser(ev);
            }
            else if(ev.getAttribute("data-bind") == "pass"){
                pass = ev.value;
                updateAuthUser(ev);
            }
        },
        isValidated: function(){
            if (login.length == 0 || pass.length == 0) {
                alert("Некоторые поля не заполнены");
            }
            else {
                isValid = true;
            }
            return isValid;
        }
    }
}();
