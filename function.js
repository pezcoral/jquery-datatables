$(document).ready(function () {
    golist()
});

/*Tomar la funcion de ajax.js para modelar una tabla desde JSON en VB*/
function golist() {
    /*Ajustar la petición para mostrar la tabla de resultados procesos*/
    var columnasdata = [{ "data": "AA" },
        { "data": "BB" },
        { "data": "CC" },
        { "data": "DD" },
        { "data": "EE" },
        { "data": "FF" },
        { "data": "GG" },
        { "data": "ACCIONES" }];

    /*Consultar procesos y mostrar*/
    autogenDatatablesminHeaders(columnasdata, "DT_listado", "JFunctionData", "listas", "{}");
    document.getElementById("FW_resultados").style.display = "block";
}
