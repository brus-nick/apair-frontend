/**
 * Created by Борис on 25.03.2016.
 */
var ApiarFactory = function()
{
    return{
        actions: {
            addAp: function() {
                if (addAppService.isValidated()) {
                    $.post('http://localhost:9000/addAp/', AddApp).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                    });
                }
            },
            changeAp: function() {
                if (changeAppService.isValidated()) {
                    $.post('http://localhost:9000/changeAp/', ChangeApp).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                    })
                }
            },
            delApiar: function() {
                if (delAppService.isValidated()) {
                    $.post('http://localhost:9000/delAp/', DelApp).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                    })
                }
            },
            getAllApp: function() {
                $.get('http://localhost:9000/getAllApp').done(function(d){
                    console.log(d);

                    $('.forTable').html('');
                    $('.forTable').append(
                        '<table class="table table-hover apiarTableAppend">' +
                        '</table>');
                    $('.apiarTableAppend').append(
                        '<thead>'+
                        '<tr style="text-align: center">' +
                        '<th>Пасека №</th>' +
                        '<th>Аналитика массы</th>' +
                        '<th>Аналитика температуры</th>' +
                        '<th>Аналитика влажности</th>' +
                        '<th>Координаты GPS</th>' +
                        '<th>Мин.температура</th>' +
                        '<th>Макс.температура</th>' +
                        '<th>Мин.влажность</th>' +
                        '<th>Макс.влажность</th>' +
                        '</tr>' +
                        '</thead>');
                    d.forEach(function(s){
                        $('.apiarTableAppend').append(
                            '<tbody>' +
                            '<tr style="text-align: center">' +
                            '<td>' + s.ap_id +'</td> ' +
                            '<td>' + s.an_mas +'</td> ' +
                            '<td>' + s.an_temp +'</td> ' +
                            '<td>' + s.an_hum +'</td> ' +
                            '<td>' + s.gps +'</td> ' +
                            '<td>' + s.min_temp +'</td> ' +
                            '<td>' + s.max_temp +'</td> ' +
                            '<td>' + s.min_hum +'</td> ' +
                            '<td>' + s.max_hum +'</td>' +
                            '</tr>' +
                            '</tbody>');
                    });
                    $('.modal').modal('hide');
                })
            }
        }
    }
}