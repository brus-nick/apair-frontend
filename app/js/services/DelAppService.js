/**
 * Created by Борис on 28.03.2016.
 */
var delAppService = function() {

    var isValid = false;

    return {
        delAppValidation: function(ev) {

            isValid = confirm("Вы действительно хотите удалить пасеку и все её улья?");
            if (isValid){
                updateDelApp(ev);
            }
        }
    }
}();