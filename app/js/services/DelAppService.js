/**
 * Created by ����� on 28.03.2016.
 */
var delAppService = function() {

    var isValid = false;

    return {
        delAppValidation: function(ev) {

            isValid = confirm("�� ������������� ������ ������� ������ � ��� � ����?");
            if (isValid){
                updateDelApp(ev);
            }
        }
    }
}();