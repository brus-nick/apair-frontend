/**
 * Created by Борис on 25.03.2016.
 */
var HivesFactory = function()
{
    return{
        action: {
            addHives: function () {
                if (addHivesService.isValidated()) {
                    $.post('http://localhost:9000/addHives/', AddHives).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                    })
                }
            },
            delHives: function() {
                if(delHivesService.isValidated()) {
                    $.post('http://localhost:9000/delHives/', DelHives).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                    })
                }
            },
            getHives: function() {
                if(getHivesService.isValidated()) {
                    $.post('http://localhost:9000/getHives/', GetHives).done(function (d) {
                        console.log(d);

                        $('.forTable').html('');
                        $('.forTable').append(
                            '<table class="table table-hover hivesTableAppend">' +
                            '</table>');
                        $('.hivesTableAppend').append(
                            '<thead>' +
                            '<tr style="text-align: center">' +
                            '<th>Улей №</th>' +
                            '<th>Аналитика массы</th>' +
                            '<th>Аналитика температуры</th>' +
                            '<th>Аналитика влажности</th>' +
                            '<th>Координаты GPS</th>' +
                            '<th>Состояние</th>' +
                            '</tr>' +
                            '</thead>');
                        d.forEach(function (s) {
                            $('.hivesTableAppend').append(
                                '<tbody>' +
                                '<tr style="text-align: center">' +
                                '<td>' + s.hive_id + '</td> ' +
                                '<td>' + s.an_mas + '</td> ' +
                                '<td>' + s.an_temp + '</td> ' +
                                '<td>' + s.an_hum + '</td> ' +
                                '<td>' + s.coordinates + '</td> ' +
                                '<td>' + s.state + '</td> ' +
                                '</tr>' +
                                '</tbody>');
                        });
                        $('.modal').modal('hide');
                    })
                }
            }
        }
    }
}