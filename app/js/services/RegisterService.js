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
                if(controlFio(ev)){
                    name = ev.value;
                    updateRegisterUser(ev);
                    removeTooltip(ev);
                }
                else{
                    name = "";
                    addTooltip(ev, 1);
                }
            }
            else if(ev.getAttribute("data-bind") == "surname"){
                if(controlFio(ev)){
                    surname = ev.value;
                    updateRegisterUser(ev);
                    removeTooltip(ev);
                }
                else{
                    surname = "";
                    addTooltip(ev, 2);
                }
            }
            else if(ev.getAttribute("data-bind") == "patronymic"){
                if(controlFio(ev)){
                    patronymic = ev.value;
                    updateRegisterUser(ev);
                    removeTooltip(ev);
                }
                else{
                    patronymic = "";
                    addTooltip(ev, 3);
                }
            }
            else if(ev.getAttribute("data-bind") == "phone"){
                if(controlPhone(ev)){
                    phone = ev.value;
                    updateRegisterUser(ev);
                    removeTooltip(ev);
                }
                else{
                    phone = "";
                    addTooltip(ev, 4);
                }

            }
            else if(ev.getAttribute("data-bind") == "email"){
                if(controlEmail(ev)){
                    email = ev.value;
                    updateRegisterUser(ev);
                    removeTooltip(ev);
                }
                else{
                    email = "";
                    addTooltip(ev, 5);
                }
            }
            else if(ev.getAttribute("data-bind") == "login"){
                if(controlAuth(ev)){
                    login = ev.value;
                    updateRegisterUser(ev);
                    removeTooltip(ev);
                    if((login.length < 6) && (login.length != 0)){
                        addTooltip(ev, 8);
                        login = "";
                    }
                }
                else{
                    removeTooltip(ev);
                    login = "";
                    addTooltip(ev, 6);
                }
            }
            else if(ev.getAttribute("data-bind") == "pass"){
                if(controlAuth(ev)){
                    pass = ev.value;
                    updateRegisterUser(ev);
                    removeTooltip(ev);
                    if ((pass.length < 6) && (pass.length != 0)){
                        addTooltip(ev, 9);
                        pass = "";
                    }
                }
                else{
                    removeTooltip(ev);
                    pass = "";
                    addTooltip(ev, 7);
                }
            }

        },
        isValidated: function(){
            if ((name.length == 0) || (surname.length == 0) || (patronymic.length == 0) ||
                (phone.length == 0) || (email.length == 0) || (login.length == 0) || (pass.length == 0)){
                alert("Некоторые поля не заполнены, либо заполнены не корректно");
            }
            else {
                isValid = true;
            }
            return isValid
        }
    }
}();

var removeTooltip = function(ev){
    $(ev).parent().removeClass("has-error");
    $(ev).tooltip("destroy");
};
var addTooltip = function(ev, key){
    $(ev).parent().addClass("has-error");
    switch (key)
    {
        case 1:{
            $(ev).tooltip({
                trigger: "manual",
                placement: "bottom",
                title: "Имя может содержать только символы русского и латинского алфавита"
            }).tooltip("show");
            break;
        }
        case 2:{
            $(ev).tooltip({
                trigger: "manual",
                placement: "bottom",
                title: "Фамилия может содержать только символы русского и латинского алфавита"
            }).tooltip("show");
            break;
        }
        case 3:{
            $(ev).tooltip({
                trigger: "manual",
                placement: "bottom",
                title: "Отчество может содержать только символы русского и латинского алфавита"
            }).tooltip("show");
            break;
        }
        case 4:{
            $(ev).tooltip({
                trigger: "manual",
                placement: "bottom",
                title: "Номер телефона может содержать только цифры"
            }).tooltip("show");
            break;
        }
        case 5:{
            $(ev).tooltip({
                trigger: "manual",
                placement: "bottom",
                title: "Email содержит недопустимые символы"
            }).tooltip("show");
            break;
        }
        case 6:{
            $(ev).tooltip({
                trigger: "manual",
                placement: "bottom",
                title: "Логин содержит недопустимые символы"
            }).tooltip("show");
            break;
        }
        case 7:{
            $(ev).tooltip({
                trigger: "manual",
                placement: "bottom",
                title: "Пароль содержит недопустимые символы"
            }).tooltip("show");
            break;
        }
        case 8:{
            $(ev).tooltip({
                trigger: "manual",
                placement: "bottom",
                title: "Логин должен содержать не менее 6 символов"
            }).tooltip("show");
            break;
        }
        case 9:{
            $(ev).tooltip({
                trigger: "manual",
                placement: "bottom",
                title: "Пароль должен содержать не менее 6 символов"
            }).tooltip("show");
            break;
        }
    }
};