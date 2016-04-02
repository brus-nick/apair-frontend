/**
 * Created by Борис on 25.03.2016.
 */

var AuthFactory = function () {

    return {
        actions: {
            register: function () {
                 if (registerService.isValidated()) {
                    $.post('http://localhost:9000/reg/', RegisterUser).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                        alert(d);
                        document.location.hash = "#persArea";
                    });
                    //document.location.href = "./index.html";
                }
            },
            auth: function () {
                if (authUserService.isValidated()) {
                    $.post('http://localhost:9000/auth/', AuthUser).success(function (data, textStatus, request) {
                        //console.log(data);
                        console.log(request);
                        s = request;
                    });
                    //document.location.href = "./PersArea.html";
                }
            },
            logout: function () {
                $.get('http://localhost:9000/logout').done(function (d) {
                    console.log(d);
                    $('.modal').modal('hide');
                })
            },
            changePass: function () {
                if (authService.isValidated()) {
                    $.post('http://localhost:9000/changePass/', ChangePassUser).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                    })
                }
            }
        },
        init: function () {
            if (document.cookie.length != 0) {
                $('.ifAuth').append(
                    '<li><button type="button" data-toggle="modal" data-target="#modalChangePass" class="navbar-link navbar-inverse" style="border: 0; padding: 15px;">Изменить пароль</button></li>' +
                    '<li><button type="button" class="navbar-link navbar-inverse logout" style="border: 0; padding: 15px;">Выйти</button></li>');
            }

        }
    }
};