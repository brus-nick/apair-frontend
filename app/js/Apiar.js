/**
 * Created by Борис on 25.03.2016.
 */
var ApiarFactory = function()
{
    return{
        actions: {
            addAp: function() {
                if (addAppService.isValidated()) {
                    $.post('http://194.58.111.34:9000/addAp/', AddApp).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                        ApiarFactory().actions.getAllApp();
                    });
                }
            },
            changeAp: function() {
                if (changeAppService.isValidated()) {
                    $.post('http://194.58.111.34:9000/changeAp/', ChangeApp).done(function (d) {
                        console.log(d);
                        $('.modal').modal('hide');
                        ApiarFactory().actions.getAllApp();
                    });
                }
            },
            delApiar: function() {
                $.post('http://194.58.111.34:9000/delAp/', DelApp).done(function (d) {
                    console.log(d);
                    $('.modal').modal('hide');
                    ApiarFactory().actions.getAllApp();
                })
            },
            getAllApp: function() {
                $.get('http://194.58.111.34:9000/getAllApp').done(function(d){
                    console.log(d);

                    $('.TableAppend').html("");
                    $('.TableAppend').append(
                        '<thead>'+
                            '<tr>' +
                                '<th colspan="9" style="text-align: center; vertical-align: middle">Пасеки</th>' +
                            '</tr>' +
                            '<tr>' +
                                '<th style="text-align: center; vertical-align: middle">Действия</th>' +
                                '<th style="text-align: center; vertical-align: middle">Аналитика массы</th>' +
                                '<th style="text-align: center; vertical-align: middle">Аналитика темп.</th>' +
                                '<th style="text-align: center; vertical-align: middle">Аналитика влажн.</th>' +
                                '<th style="text-align: center; vertical-align: middle">Координаты</th>' +
                                '<th style="text-align: center; vertical-align: middle">Мин.темп.</th>' +
                                '<th style="text-align: center; vertical-align: middle">Макс.темп.</th>' +
                                '<th style="text-align: center; vertical-align: middle">Мин.влажн.</th>' +
                                '<th style="text-align: center; vertical-align: middle">Макс.влажн.</th>' +
                            '</tr>' +
                        '</thead>' +
                        '<tbody>');
                    d.forEach(function(s){
                        $('.TableAppend').append(
                            '<tr>' +
                                '<td>' +
                                    '<div class="btn-group" role="group" aria-label="...">' +
                                        '<button type="button" class="btn btn-default" style="display: none" title="Добавить пасеку">+</button>' +
                                        '<button type="button" class="btn btn-default" title="Удалить пасеку" data-bind="' + s.ap_id + '"onclick="delAppService.delAppValidation(this)">-</button>' +
                                        '<button type="button" class="btn btn-default" title="Перейти" data-bind="' + s.ap_id + '"onclick="updateGetHives(this)">>></button>' +
                                        '<button type="button" class="btn btn-default" title="Изменить" data-bind="' + s.ap_id + '"onclick="updateChangeAppId(this)" data-toggle="modal" data-target="#modalChangeAp">modify</button>' +
                                    '</div>' +
                                '</td> ' +
                                '<td style="text-align: center; vertical-align: middle;">' + s.an_mas +'</td> ' +
                                '<td style="text-align: center; vertical-align: middle;">' + s.an_temp +'</td> ' +
                                '<td style="text-align: center; vertical-align: middle;">' + s.an_hum +'</td> ' +
                                '<td style="text-align: center; vertical-align: middle;">' + s.gps +'</td> ' +
                                '<td style="text-align: center; vertical-align: middle;">' + s.min_temp +'</td> ' +
                                '<td style="text-align: center; vertical-align: middle;">' + s.max_temp +'</td> ' +
                                '<td style="text-align: center; vertical-align: middle;">' + s.min_hum +'</td> ' +
                                '<td style="text-align: center; vertical-align: middle;">' + s.max_hum +'</td>' +
                            '</tr>');
                    });
                    $('.TableAppend').append(
                    '<tr>' +
                        '<td>' +
                            '<div class="btn-group" role="group" aria-label="...">' +
                                '<button type="button" class="btn btn-default" title="Добавить пасеку" onclick="ApiarFactory().actions.addAp()">+</button>' +
                                '<button type="button" class="btn btn-default" style="display: none" title="Удалить пасеку">-</button>' +
                                '<button type="button" class="btn btn-default" style="display: none" title="Изменить">modify</button>' +
                            '</div>' +
                        '</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">-</td>' +
                        '<td style="text-align: center; vertical-align: middle">' +
                            '<input class="form-control" data-bind="min_temp" oninput="addAppService.addAppValidation(this)" placeholder="Мин tC">' +
                        '</td>' +
                        '<td style="text-align: center; vertical-align: middle">' +
                            '<input class="form-control" data-bind="max_temp" oninput="addAppService.addAppValidation(this)" placeholder="Mакс tC">' +
                        '</td>' +
                        '<td style="text-align: center; vertical-align: middle">' +
                            '<input class="form-control" data-bind="min_hum" oninput="addAppService.addAppValidation(this)" placeholder="Mин г/м³">' +
                        '</td>' +
                        '<td style="text-align: center; vertical-align: middle">' +
                            '<input class="form-control" data-bind="max_hum" oninput="addAppService.addAppValidation(this)" placeholder="Mакс г/м³">' +
                        '</td>' +
                    '</tr>' +
                    '</tbody>');
                    $('.modal').modal('hide');
                })
            }
        }
    }
};