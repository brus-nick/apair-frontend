var routes = function(){

    var items = {
        '#home' : 'home.html',
        '#persArea' : 'persArea.html',
        '#register' : 'register.html'
    };

    var interceptor = function(){

        if(items[window.location.hash] == null){
            window.location.hash = '#home';
        }
        else if (location.hash == "#persArea"){
            //$('#greet').html(s.responseText);
            ApiarFactory().actions.getAllApp();
        }

        $.ajax({
            url: "views/partials/" + items[window.location.hash]
        }).success(function(d) {
            $('#view').html(d);
        });
    };

    window.onhashchange = interceptor;

    return {
        interceptor: interceptor,
        go: function(route){
            location.hash = route;
        }
    }
};



