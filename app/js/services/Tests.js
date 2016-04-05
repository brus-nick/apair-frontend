/**
 * Created by Борис on 05.04.2016.
 */
var controlFio = function(ev){
    var key = true, str = ev.value;

    for(var i = 0; i < str.length; i++){
       if((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) || (str.charCodeAt(i) >= 176 && str.charCodeAt(i) <= 239)){
           key = true;
       }
       else{
           key = false;
           break;
       }
    }
    return key;
};