/**
 * Created by Борис on 28.03.2016.
 */
var delHivesService = function() {

    var isValid = false;

    return {
        delHivesValidation: function(ev) {
            isValid = confirm("Вы действительно хотите удалить улей?");
            if (isValid){
                updateDelHives(ev);
            }
        }
    }
}();