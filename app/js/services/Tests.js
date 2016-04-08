/**
 * Created by Борис on 05.04.2016.
 */
var controlFio = function(ev){
    var key = true, str = ev.value;

    for(var i = 0; i < str.length; i++){
       if((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
           || (str.charCodeAt(i) >= 1040 && str.charCodeAt(i) <= 1103) || (str.charCodeAt(i) == 1025) || (str.charCodeAt(i) == 1105)){
           key = true;
       }
       else{
           key = false;
           break;
       }
    }
    return key;
};

var controlPhone = function(ev){
    var key = true, str = ev.value;

    for(var i = 0; i < str.length; i++){
        if((str.charCodeAt(i) >= 48) && (str.charCodeAt(i) <= 57)){
            key = true;
        }
        else{
            key = false;
            break;
        }
    }
    return key;
};

var controlEmail = function(ev){
    var key = true, str = ev.value;

    for(var i = 0; i < str.length; i++){
        if((str.charCodeAt(i) >= 64 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
            || (str.charCodeAt(i) == 46) || (str.charCodeAt(i) == 95) || (str.charCodeAt(i) == 45) ||
            ((str.charCodeAt(i) >= 48) && (str.charCodeAt(i) <= 57))){
            key = true;
        }
        else{
            key = false;
            break;
        }
    }
    return key;
};

var controlAuth = function(ev){
    var key = true, str = ev.value;

    for(var i = 0; i < str.length; i++){
        if((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
            || (str.charCodeAt(i) == 46) || (str.charCodeAt(i) == 95) || (str.charCodeAt(i) == 45) ||
            ((str.charCodeAt(i) >= 48) && (str.charCodeAt(i) <= 57))){
            key = true;
        }
        else{
            key = false;
            break;
        }
    }
    return key;
};


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