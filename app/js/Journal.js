/**
 * Created by Борис on 05.05.2016.
 */
var JournalFactory = function()
{

    return{
        action: {
            delRecord: function() {
                $.post('http://194.58.111.34:9000/delRecord/', DelRecord).done(function (d) {
                    console.log(d);
                    $('.modal').modal('hide');
                    JournalFactory().action.getRecords();
                })
            },
            getRecords: function() {
                $.post('http://194.58.111.34:9000/getRecords/', GetRecords).done(function (d) {
                    console.log(d);
                    $('.TableAppend').html("");
                    $('.TableAppend').append(
                        '<thead>'+
                        '<tr>' +
                        '<th colspan="7" style="text-align: center; vertical-align: middle">Журнал</th>' +
                        '</tr>' +
                        '<tr>' +
                        '<th style="text-align: center; vertical-align: middle">Действия</th>' +
                        '<th style="text-align: center; vertical-align: middle">Масса</th>' +
                        '<th style="text-align: center; vertical-align: middle">Температура</th>' +
                        '<th style="text-align: center; vertical-align: middle">Влажность</th>' +
                        '<th style="text-align: center; vertical-align: middle">Координаты</th>' +
                        '<th style="text-align: center; vertical-align: middle">Состояние</th>' +
                        '<th style="text-align: center; vertical-align: middle">Дата/Время</th>' +
                        '</tr>' +
                        '</thead>' +
                        '<tbody>');
                    d.forEach(function(s){
                        $('.TableAppend').append(
                            '<tr>' +
                            '<td>' +
                            '<div class="btn-group" role="group" aria-label="...">' +
                            '<button type="button" class="btn btn-default" title="Удалить запись" data-bind="' + s.journal_id + '"onclick="updateDelRecord(this)">-</button>' +
                            '</div>' +
                            '</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.mas +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.temp +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.hum +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.coordinates +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.state +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.date_time +'</td> ' +
                            '</tr>');
                    });
                    $('.TableAppend').append(
                        '<tr>' +
                        '<td>' +
                        '<div class="btn-group" role="group" aria-label="...">' +
                        '<button type="button" class="btn btn-default" title="Вернуться" onclick="HivesFactory().action.getHives()"><<</button>' +
                        '</div>' +
                        '</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '</tr>' +
                        '</tbody>');
                    $('.modal').modal('hide');
                });
                setTimeout(JournalFactory().action.getRecords(), 20000);
            }
        }
    }
};