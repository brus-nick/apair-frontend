/**
 * Created by Борис on 25.03.2016.
 */
var HivesFactory = function()
{

    return{
        action: {
            addHives: function () {
                if(addHivesService.isValidated()) {
                    $.post('http://localhost:9000/addHives/', AddHives).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                        HivesFactory().action.getHives();
                    })
                }
            },
            delHives: function() {
                $.post('http://localhost:9000/delHives/', DelHives).done(function (d) {
                    console.log(d);
                    $('.modal').modal('hide');
                    HivesFactory().action.getHives();
                })
            },
            changeHives: function(){
                if(changeHiveService.isValidated()) {
                    $.post('http://localhost:9000/changeHive/', ChangeHives).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                        HivesFactory().action.getHives();
                    })
                }
            },
            getHives: function() {
                $.post('http://localhost:9000/getHives/', GetHives).done(function (d) {
                    console.log(d);
                    $('.TableAppend').html("");
                    $('.TableAppend').append(
                        '<thead>'+
                        '<tr>' +
                            '<th colspan="7" style="text-align: center; vertical-align: middle">Ульи</th>' +
                        '</tr>' +
                        '<tr>' +
                        '<th style="text-align: center; vertical-align: middle">Действия</th>' +
                        '<th style="text-align: center; vertical-align: middle">Аналитика массы</th>' +
                        '<th style="text-align: center; vertical-align: middle">Аналитика темп.</th>' +
                        '<th style="text-align: center; vertical-align: middle">Аналитика влажн.</th>' +
                        '<th style="text-align: center; vertical-align: middle">Координаты</th>' +
                        '<th style="text-align: center; vertical-align: middle">Состояние</th>' +
                        '<th style="text-align: center; vertical-align: middle">Телефон (GSM)</th>' +
                        '</tr>' +
                        '</thead>' +
                        '<tbody>');
                    d.forEach(function(s){
                        $('.TableAppend').append(
                            '<tr>' +
                            '<td>' +
                            '<div class="btn-group" role="group" aria-label="...">' +
                            '<button type="button" class="btn btn-default" style="display: none" title="Добавить улей">+</button>' +
                            '<button type="button" class="btn btn-default" title="Удалить улей" data-bind="' + s.hive_id + '"onclick="delHivesService.delHivesValidation(this)">-</button>' +
                            '<button type="button" class="btn btn-default" title="Перейти" data-bind="' + s.hive_id + '"onclick="updateGetRecords(this)">>></button>' +
                            '<button type="button" class="btn btn-default" title="Изменить GSM телефон" data-bind="' + s.hive_id + '"onclick="updateChangeHiveId(this)" data-toggle="modal" data-target="#modalChangeHive">modify</button>' +
                            '</div>' +
                            '</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.an_mas +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.an_temp +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.an_hum +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.coordinates +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.state +'</td> ' +
                            '<td style="text-align: center; vertical-align: middle;">' + s.phone +'</td> ' +
                            '</tr>');
                    });
                    $('.TableAppend').append(
                        '<tr>' +
                        '<td>' +
                        '<div class="btn-group" role="group" aria-label="...">' +
                        '<button type="button" class="btn btn-default" title="Добавить улей" onclick="HivesFactory().action.addHives()">+</button>' +
                        '<button type="button" class="btn btn-default" title="Вернуться" onclick="ApiarFactory().actions.getAllApp()"><<</button>' +
                        '</div>' +
                        '</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">' +
                        '<input class="form-control" data-bind="' + GetHives.ap_id + '"oninput="addHivesService.addHivesValidation(this)" placeholder="8**********">' +
                        '</td>' +
                        '</tr>' +
                        '</tbody>');
                    $('.modal').modal('hide');
                });
            }
        }
    }
};
