/**
 * Created by Борис on 25.03.2016.
 */
var HivesFactory = function()
{
    var ap_Id;

    return{
        action: {
            addHives: function () {
                    $.post('http://localhost:9000/addHives/', AddHives).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                        HivesFactory().action.getHives(ap_Id);
                    })
            },
            delHives: function() {
                if(delHivesService.isValidated()) {
                    $.post('http://localhost:9000/delHives/', DelHives).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                    })
                }
            },
            getHives: function(ap_id) {
                $.post('http://localhost:9000/getHives/', GetHives).done(function (d) {
                    console.log(d);
                    $('.TableAppend').html("");
                    $('.TableAppend').append(
                        '<thead>'+
                        '<tr>' +
                        '<th style="text-align: center; vertical-align: middle">Действия</th>' +
                        '<th style="text-align: center; vertical-align: middle">Аналитика массы</th>' +
                        '<th style="text-align: center; vertical-align: middle">Аналитика темп.</th>' +
                        '<th style="text-align: center; vertical-align: middle">Аналитика влажн.</th>' +
                        '<th style="text-align: center; vertical-align: middle">Координаты</th>' +
                        '<th style="text-align: center; vertical-align: middle">Состояние</th>' +
                        '</tr>' +
                        '</thead>' +
                        '<tbody>');
                    d.forEach(function(s){
                        $('.TableAppend').append(
                            '<tr>' +
                            '<td>' +
                            '<div class="btn-group" role="group" aria-label="...">' +
                            '<button type="button" class="btn btn-default" style="display: none" title="Добавить улей">+</button>' +
                            '<button type="button" class="btn btn-default" title="Удалить улей" data-bind="' + s.hive_id + '"onclick="delAppService.delAppValidation(this)">-</button>' +
                            '</div>' +
                            '</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.an_mas +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.an_temp +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.an_hum +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.coordinates +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.state +'</td> ' +
                            '</tr>');
                    });
                    $('.TableAppend').append(
                        '<tr>' +
                        '<td>' +
                        '<div class="btn-group" role="group" aria-label="...">' +
                        '<button type="button" class="btn btn-default" title="Добавить улей" data-bind="' + ap_id + '"onclick="updateAddHives(this)">+</button>' +
                        '</div>' +
                        '</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '</tr>' +
                        '</tbody>');
                    $('.modal').modal('hide');
                });
                ap_Id = ap_id;
            }
        }
    }
};
