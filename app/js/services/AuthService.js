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
            if (login.length == 0 || pass.length == 0) {
                console.log("Вы заполнили не все поля");
            }
            else {
                isValid = true;
            }
        },
        isValidated: function(){return isValid}
    }
}();
