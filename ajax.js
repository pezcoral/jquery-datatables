/*Autogenerar datatables con respuesta JSON*/
function autogenDatatables(columnasdata, tablainicial, fuente, metodo, datos) {
    $.ajax({
        type: "POST",
        url: fuente + ".aspx/" + metodo,
        data: datos,
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforesend: mostraresperacarga(),
        timeout: 40000,
        success: function (response) {
            //alert(Object.values(response))
            console.log(Object.values(response));

            /*A la variable le asigno el json decodificado*/
            var dt = JSON.parse(Object.values(response));

            /*Crear la tabla json*/
            $('#' + tablainicial).dataTable({
                data: dt,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bPaginate: true,
                dom: 'Bfrtip',
                buttons: ['copy', 'excel', 'pdf', 'print', 'pageLength'],
                columns: columnasdata,
                initComplete: function () {
                    /*Botones de acciones*/
                    var btns = $('.dt-button');
                    btns.addClass('btn btn-dark btn-sm');
                    btns.removeClass('dt-button');

                    /*Tamaño letra en tabla por defecto*/
                    $("#" + tablainicial).css("font-size", "0.875rem");
                },
                "bDestroy": true,
                "language": {
                    "processing": "Procesando...",
                    "lengthMenu": "Mostrar _MENU_ registros",
                    "zeroRecords": "No se encontraron resultados",
                    "emptyTable": "Ningún dato disponible en esta tabla",
                    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                    "search": "Buscar:",
                    "infoThousands": ",",
                    "loadingRecords": "Cargando...",
                    "paginate": {
                        "first": "Primero",
                        "last": "Último",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    },
                    "aria": {
                        "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                        "sortDescending": ": Activar para ordenar la columna de manera descendente"
                    },
                    "buttons": {
                        "copy": "<i class=\"fas fa-copy\" style=\"color:#007bff\"></i> Copiar",
                        "colvis": "Visibilidad",
                        "collection": "Colección",
                        "colvisRestore": "Restaurar visibilidad",
                        "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br \/> <br \/> Para cancelar, haga clic en este mensaje o presione escape.",
                        "copySuccess": {
                            "1": "Copiada 1 fila al portapapeles",
                            "_": "Copiadas %d fila al portapapeles"
                        },
                        "copyTitle": "Copiar al portapapeles",
                        "csv": "CSV",
                        "excel": "<i class=\"fas fa-file-excel\" style=\"color:#28a745\"></i> Excel",
                        "pageLength": {
                            "-1": "Mostrar todas las filas",
                            "1": "Mostrar 1 fila",
                            "_": "Mostrar %d filas"
                        },
                        "pdf": "<i class=\"fas fa-file-pdf\" style=\"color:#dc3545\"></i> PDF",
                        "print": "<i class=\"fas fa-print\" style=\"color:#17a2b8\"></i> Imprimir"
                    },
                    "autoFill": {
                        "cancel": "Cancelar",
                        "fill": "Rellene todas las celdas con <i>%d<\/i>",
                        "fillHorizontal": "Rellenar celdas horizontalmente",
                        "fillVertical": "Rellenar celdas verticalmentemente"
                    },
                    "decimal": ",",
                    "searchBuilder": {
                        "add": "Añadir condición",
                        "button": {
                            "0": "Constructor de búsqueda",
                            "_": "Constructor de búsqueda (%d)"
                        },
                        "clearAll": "Borrar todo",
                        "condition": "Condición",
                        "conditions": {
                            "date": {
                                "after": "Despues",
                                "before": "Antes",
                                "between": "Entre",
                                "empty": "Vacío",
                                "equals": "Igual a",
                                "not": "No",
                                "notBetween": "No entre",
                                "notEmpty": "No Vacio"
                            },
                            "number": {
                                "between": "Entre",
                                "empty": "Vacio",
                                "equals": "Igual a",
                                "gt": "Mayor a",
                                "gte": "Mayor o igual a",
                                "lt": "Menor que",
                                "lte": "Menor o igual que",
                                "not": "No",
                                "notBetween": "No entre",
                                "notEmpty": "No vacío"
                            },
                            "string": {
                                "contains": "Contiene",
                                "empty": "Vacío",
                                "endsWith": "Termina en",
                                "equals": "Igual a",
                                "not": "No",
                                "notEmpty": "No Vacio",
                                "startsWith": "Empieza con"
                            }
                        },
                        "data": "Data",
                        "deleteTitle": "Eliminar regla de filtrado",
                        "leftTitle": "Criterios anulados",
                        "logicAnd": "Y",
                        "logicOr": "O",
                        "rightTitle": "Criterios de sangría",
                        "title": {
                            "0": "Constructor de búsqueda",
                            "_": "Constructor de búsqueda (%d)"
                        },
                        "value": "Valor"
                    },
                    "searchPanes": {
                        "clearMessage": "Borrar todo",
                        "collapse": {
                            "0": "Paneles de búsqueda",
                            "_": "Paneles de búsqueda (%d)"
                        },
                        "count": "{total}",
                        "countFiltered": "{shown} ({total})",
                        "emptyPanes": "Sin paneles de búsqueda",
                        "loadMessage": "Cargando paneles de búsqueda",
                        "title": "Filtros Activos - %d"
                    },
                    "select": {
                        "1": "%d fila seleccionada",
                        "_": "%d filas seleccionadas",
                        "cells": {
                            "1": "1 celda seleccionada",
                            "_": "$d celdas seleccionadas"
                        },
                        "columns": {
                            "1": "1 columna seleccionada",
                            "_": "%d columnas seleccionadas"
                        }
                    },
                    "thousands": ".",
                    "datetime": {
                        "previous": "Anterior",
                        "next": "Proximo",
                        "hours": "Horas"
                    }
                }
            });

            /*Ubicarse en el href de la pagina donde sale el listado*/
            location.hash = "#" + tablainicial;

            ocultaresperacarga();
        },
        error: function (response, status, error) {
            ocultaresperacarga();
            console.log(Object.values(response));
            console.log(status);
            console.log(error);
            alertaemergente("Oooops ocurrió algo....", "Se agotó el tiempo de espera, generalmente se debe a lentitud en la red de internet, también puede ser lentitud de nuestra red interna.<br>Si continua teniendo problemas inténtelo más tarde o comuníquese a través de alguno de los canales de atención del sistema.");
        }
    });
}

/*Autogenerar datatables con respuesta JSON - con fuente mas pequeña para reportes de datos grandes*/
function autogenDatatablesmin(columnasdata, tablainicial, fuente, metodo, datos) {
    $.ajax({
        type: "POST",
        url: fuente + ".aspx/" + metodo,
        data: datos,
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforesend: mostraresperacarga(),
        timeout: 40000,
        success: function (response) {
            //alert(Object.values(response))
            console.log(Object.values(response));

            /*A la variable le asigno el json decodificado*/
            var dt = JSON.parse(Object.values(response));

            /*Crear la tabla json*/
            $('#' + tablainicial).dataTable({
                data: dt,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bPaginate: true,
                dom: 'Bfrtip',
                buttons: ['copy', 'excel', 'pdf', 'print', 'pageLength'],
                columns: columnasdata,
                initComplete: function () {
                    /*Botones de acciones*/
                    var btns = $('.dt-button');
                    btns.addClass('btn btn-dark btn-sm');
                    btns.removeClass('dt-button');

                    /*Tamaño letra en tabla por defecto*/
                    $("#" + tablainicial).css("font-size", "0.688rem");
                },
                "bDestroy": true,
                "language": {
                    "processing": "Procesando...",
                    "lengthMenu": "Mostrar _MENU_ registros",
                    "zeroRecords": "No se encontraron resultados",
                    "emptyTable": "Ningún dato disponible en esta tabla",
                    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                    "search": "Buscar:",
                    "infoThousands": ",",
                    "loadingRecords": "Cargando...",
                    "paginate": {
                        "first": "Primero",
                        "last": "Último",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    },
                    "aria": {
                        "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                        "sortDescending": ": Activar para ordenar la columna de manera descendente"
                    },
                    "buttons": {
                        "copy": "<i class=\"fas fa-copy\" style=\"color:#007bff\"></i> Copiar",
                        "colvis": "Visibilidad",
                        "collection": "Colección",
                        "colvisRestore": "Restaurar visibilidad",
                        "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br \/> <br \/> Para cancelar, haga clic en este mensaje o presione escape.",
                        "copySuccess": {
                            "1": "Copiada 1 fila al portapapeles",
                            "_": "Copiadas %d fila al portapapeles"
                        },
                        "copyTitle": "Copiar al portapapeles",
                        "csv": "CSV",
                        "excel": "<i class=\"fas fa-file-excel\" style=\"color:#28a745\"></i> Excel",
                        "pageLength": {
                            "-1": "Mostrar todas las filas",
                            "1": "Mostrar 1 fila",
                            "_": "Mostrar %d filas"
                        },
                        "pdf": "<i class=\"fas fa-file-pdf\" style=\"color:#dc3545\"></i> PDF",
                        "print": "<i class=\"fas fa-print\" style=\"color:#17a2b8\"></i> Imprimir"
                    },
                    "autoFill": {
                        "cancel": "Cancelar",
                        "fill": "Rellene todas las celdas con <i>%d<\/i>",
                        "fillHorizontal": "Rellenar celdas horizontalmente",
                        "fillVertical": "Rellenar celdas verticalmentemente"
                    },
                    "decimal": ",",
                    "searchBuilder": {
                        "add": "Añadir condición",
                        "button": {
                            "0": "Constructor de búsqueda",
                            "_": "Constructor de búsqueda (%d)"
                        },
                        "clearAll": "Borrar todo",
                        "condition": "Condición",
                        "conditions": {
                            "date": {
                                "after": "Despues",
                                "before": "Antes",
                                "between": "Entre",
                                "empty": "Vacío",
                                "equals": "Igual a",
                                "not": "No",
                                "notBetween": "No entre",
                                "notEmpty": "No Vacio"
                            },
                            "number": {
                                "between": "Entre",
                                "empty": "Vacio",
                                "equals": "Igual a",
                                "gt": "Mayor a",
                                "gte": "Mayor o igual a",
                                "lt": "Menor que",
                                "lte": "Menor o igual que",
                                "not": "No",
                                "notBetween": "No entre",
                                "notEmpty": "No vacío"
                            },
                            "string": {
                                "contains": "Contiene",
                                "empty": "Vacío",
                                "endsWith": "Termina en",
                                "equals": "Igual a",
                                "not": "No",
                                "notEmpty": "No Vacio",
                                "startsWith": "Empieza con"
                            }
                        },
                        "data": "Data",
                        "deleteTitle": "Eliminar regla de filtrado",
                        "leftTitle": "Criterios anulados",
                        "logicAnd": "Y",
                        "logicOr": "O",
                        "rightTitle": "Criterios de sangría",
                        "title": {
                            "0": "Constructor de búsqueda",
                            "_": "Constructor de búsqueda (%d)"
                        },
                        "value": "Valor"
                    },
                    "searchPanes": {
                        "clearMessage": "Borrar todo",
                        "collapse": {
                            "0": "Paneles de búsqueda",
                            "_": "Paneles de búsqueda (%d)"
                        },
                        "count": "{total}",
                        "countFiltered": "{shown} ({total})",
                        "emptyPanes": "Sin paneles de búsqueda",
                        "loadMessage": "Cargando paneles de búsqueda",
                        "title": "Filtros Activos - %d"
                    },
                    "select": {
                        "1": "%d fila seleccionada",
                        "_": "%d filas seleccionadas",
                        "cells": {
                            "1": "1 celda seleccionada",
                            "_": "$d celdas seleccionadas"
                        },
                        "columns": {
                            "1": "1 columna seleccionada",
                            "_": "%d columnas seleccionadas"
                        }
                    },
                    "thousands": ".",
                    "datetime": {
                        "previous": "Anterior",
                        "next": "Proximo",
                        "hours": "Horas"
                    }
                }
            });

            /*Ubicarse en el href de la pagina donde sale el listado*/
            location.hash = "#" + tablainicial;

            ocultaresperacarga();
        },
        error: function (response, status, error) {
            ocultaresperacarga();
            console.log(Object.values(response));
            console.log(status);
            console.log(error);
            alertaemergente("Oooops ocurrió algo....", "Se agotó el tiempo de espera, generalmente se debe a lentitud en la red de internet, también puede ser lentitud de nuestra red interna.<br>Si continua teniendo problemas inténtelo más tarde o comuníquese a través de alguno de los canales de atención del sistema.");
        }
    });
}

/*Autogenerar datatables con respuesta JSON - con fuente mas pequeña para reportes de datos grandes - Con filtros en cada columna - Primer y ultimo item excluidos del filtro*/
function autogenDatatablesminHeaders(columnasdata, tablainicial, fuente, metodo, datos, filtroinicial = false, filtrofinal = false ) {
    $.ajax({
        type: "POST",
        url: fuente + ".aspx/" + metodo,
        data: datos,
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforesend: mostraresperacarga(),
        timeout: 40000,
        success: function (response) {
            //alert(Object.values(response))
            console.log(Object.values(response));

            /*A la variable le asigno el json decodificado*/
            var dt = JSON.parse(Object.values(response));

            /*Cambio para permitir busqueda individual*/
            $('#' + tablainicial + ' thead tr').clone(true).addClass('filters').appendTo('#' + tablainicial + 'thead');

            /*Crear la tabla json*/
            var table = $('#' + tablainicial).dataTable({
                data: dt,
                orderCellsTop: true,
                fixedHeader: true,
                bLengthChange: true,
                bFilter: true,
                bSort: true,
                bPaginate: true,
                dom: 'Bfrtip',
                buttons: ['copy', 'excel', 'pdf', 'print', 'pageLength'],
                columns: columnasdata,
                initComplete: function () {
                    /*Botones de acciones*/
                    var btns = $('.dt-button');
                    btns.addClass('btn btn-dark btn-sm');
                    btns.removeClass('dt-button');

                    /*Tamaño letra en tabla por defecto*/
                    $("#" + tablainicial).css("font-size", "0.688rem");
                },
                "bDestroy": true,
                "language": {
                    "processing": "Procesando...",
                    "lengthMenu": "Mostrar _MENU_ registros",
                    "zeroRecords": "No se encontraron resultados",
                    "emptyTable": "Ningún dato disponible en esta tabla",
                    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                    "search": "Buscar:",
                    "infoThousands": ",",
                    "loadingRecords": "Cargando...",
                    "paginate": {
                        "first": "Primero",
                        "last": "Último",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    },
                    "aria": {
                        "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                        "sortDescending": ": Activar para ordenar la columna de manera descendente"
                    },
                    "buttons": {
                        "copy": "<i class=\"fas fa-copy\" style=\"color:#007bff\"></i> Copiar",
                        "colvis": "Visibilidad",
                        "collection": "Colección",
                        "colvisRestore": "Restaurar visibilidad",
                        "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br \/> <br \/> Para cancelar, haga clic en este mensaje o presione escape.",
                        "copySuccess": {
                            "1": "Copiada 1 fila al portapapeles",
                            "_": "Copiadas %d fila al portapapeles"
                        },
                        "copyTitle": "Copiar al portapapeles",
                        "csv": "CSV",
                        "excel": "<i class=\"fas fa-file-excel\" style=\"color:#28a745\"></i> Excel",
                        "pageLength": {
                            "-1": "Mostrar todas las filas",
                            "1": "Mostrar 1 fila",
                            "_": "Mostrar %d filas"
                        },
                        "pdf": "<i class=\"fas fa-file-pdf\" style=\"color:#dc3545\"></i> PDF",
                        "print": "<i class=\"fas fa-print\" style=\"color:#17a2b8\"></i> Imprimir"
                    },
                    "autoFill": {
                        "cancel": "Cancelar",
                        "fill": "Rellene todas las celdas con <i>%d<\/i>",
                        "fillHorizontal": "Rellenar celdas horizontalmente",
                        "fillVertical": "Rellenar celdas verticalmentemente"
                    },
                    "decimal": ",",
                    "searchBuilder": {
                        "add": "Añadir condición",
                        "button": {
                            "0": "Constructor de búsqueda",
                            "_": "Constructor de búsqueda (%d)"
                        },
                        "clearAll": "Borrar todo",
                        "condition": "Condición",
                        "conditions": {
                            "date": {
                                "after": "Despues",
                                "before": "Antes",
                                "between": "Entre",
                                "empty": "Vacío",
                                "equals": "Igual a",
                                "not": "No",
                                "notBetween": "No entre",
                                "notEmpty": "No Vacio"
                            },
                            "number": {
                                "between": "Entre",
                                "empty": "Vacio",
                                "equals": "Igual a",
                                "gt": "Mayor a",
                                "gte": "Mayor o igual a",
                                "lt": "Menor que",
                                "lte": "Menor o igual que",
                                "not": "No",
                                "notBetween": "No entre",
                                "notEmpty": "No vacío"
                            },
                            "string": {
                                "contains": "Contiene",
                                "empty": "Vacío",
                                "endsWith": "Termina en",
                                "equals": "Igual a",
                                "not": "No",
                                "notEmpty": "No Vacio",
                                "startsWith": "Empieza con"
                            }
                        },
                        "data": "Data",
                        "deleteTitle": "Eliminar regla de filtrado",
                        "leftTitle": "Criterios anulados",
                        "logicAnd": "Y",
                        "logicOr": "O",
                        "rightTitle": "Criterios de sangría",
                        "title": {
                            "0": "Constructor de búsqueda",
                            "_": "Constructor de búsqueda (%d)"
                        },
                        "value": "Valor"
                    },
                    "searchPanes": {
                        "clearMessage": "Borrar todo",
                        "collapse": {
                            "0": "Paneles de búsqueda",
                            "_": "Paneles de búsqueda (%d)"
                        },
                        "count": "{total}",
                        "countFiltered": "{shown} ({total})",
                        "emptyPanes": "Sin paneles de búsqueda",
                        "loadMessage": "Cargando paneles de búsqueda",
                        "title": "Filtros Activos - %d"
                    },
                    "select": {
                        "1": "%d fila seleccionada",
                        "_": "%d filas seleccionadas",
                        "cells": {
                            "1": "1 celda seleccionada",
                            "_": "$d celdas seleccionadas"
                        },
                        "columns": {
                            "1": "1 columna seleccionada",
                            "_": "%d columnas seleccionadas"
                        }
                    },
                    "thousands": ".",
                    "datetime": {
                        "previous": "Anterior",
                        "next": "Proximo",
                        "hours": "Horas"
                    }
                }
            });

            var largo = $('#' + tablainicial + ' tfoot th').length;
            $('#' + tablainicial + ' tfoot th').each(function (i) {
                if ( ( (i > 0) || (filtroinicial == true) ) && ( (i < (largo-1)) || (filtrofinal == true))) {
                    var title = $('#' + tablainicial + ' thead th').eq($(this).index()).text();
                    var search = '<input type="text" placeholder="Filtrar: ' + title + '"/>';
                    $(this).html('');
                    $(search).appendTo(this).keyup(function () { table.fnFilter($(this).val(), i) })
                }
            })

            /*Ubicarse en el href de la pagina donde sale el listado*/
            location.hash = "#" + tablainicial;

            ocultaresperacarga();
        },
        error: function (response, status, error) {
            ocultaresperacarga();
            console.log(Object.values(response));
            console.log(status);
            console.log(error);
            alertaemergente("Oooops ocurrió algo....", "Se agotó el tiempo de espera, generalmente se debe a lentitud en la red de internet, también puede ser lentitud de nuestra red interna.<br>Si continua teniendo problemas inténtelo más tarde o comuníquese a través de alguno de los canales de atención del sistema.");
        }
    });
}
