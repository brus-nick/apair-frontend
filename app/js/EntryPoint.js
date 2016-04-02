$(function(){

    $.ajaxSetup({
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        }});

    AuthFactory().init();
    routes().interceptor();
});

