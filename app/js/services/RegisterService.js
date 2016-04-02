/**
 * Created by Борис on 28.03.2016.
 */
var registerService = function() {

    var isValid = false, name = "", surname = "",
        patronymic = "", phone = "", email = "",
        login = "", pass = "";

    return {
        registerValidation: function(ev) {

            isValid = false;

            if(ev.getAttribute("data-bind") == "name"){
                name = ev.value;
                updateRegisterUser(ev);
            }
            else if(ev.getAttribute("data-bind") == "surname"){
                surname = ev.value;
                updateRegisterUser(ev);
            }
            else if(ev.getAttribute("data-bind") == "patronymic"){
                patronymic = ev.value;
                updateRegisterUser(ev);
            }
            else if(ev.getAttribute("data-bind") == "phone"){
                phone = ev.value;
                updateRegisterUser(ev);
            }
            else if(ev.getAttribute("data-bind") == "email"){
                email = ev.value;
                updateRegisterUser(ev);
            }
            else if(ev.getAttribute("data-bind") == "login"){
                login = ev.value;
                updateRegisterUser(ev);
            }
            else if(ev.getAttribute("data-bind") == "pass"){
                pass = ev.value;
                updateRegisterUser(ev);
            }
            if (name.length == 0 || surname.length == 0 || patronymic.length == 0
                || phone.length == 0 || email.length == 0 || login.length == 0 || pass.length == 0) {
                console.log("Вы заполнили не все поля");
            }
            else if (login.length < 6) {
                console.log("Введите более длинный логин");
            }
            else if (pass.length < 6) {
                console.log("Введите более длинный пароль");
            }
            else {
                isValid = true;
            }
        },
        isValidated: function(){return isValid}
    }
}();