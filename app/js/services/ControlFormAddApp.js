/**
 * Created by Борис on 13.04.2016.
 */
var controlTemp = function(ev){
    var key = true, str = ev.value;

    for(var i = 0; i < str.length; i++){
        if(((str.charCodeAt(i) >= 48) && (str.charCodeAt(i) <= 57)) || (str.charCodeAt(i) == 43) || (str.charCodeAt(i) == 45)){
            key = true;
        }
        else{
            key = false;
            break;
        }
    }
    return key;
};

var controlHumid = function(ev){
    var key = true, str = ev.value;

    for(var i = 0; i < str.length; i++){
        if(((str.charCodeAt(i) >= 48) && (str.charCodeAt(i) <= 57)) || (str.charCodeAt(i) == 44) || (str.charCodeAt(i) == 46)){
            key = true;
        }
        else{
            key = false;
            break;
        }
    }
    return key;
};
