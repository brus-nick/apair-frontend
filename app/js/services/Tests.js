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