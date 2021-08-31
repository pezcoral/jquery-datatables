.....Paste inside class or change to your programming language, only is important to return a JSON ...

    '////////////////////////////////////////////////////////////////////////
    '////////////////////////////////////////////////////////////////////////
    '////////////////////////LISTADO DE PROCESOS/////////////////////////////
    '////////////////////////////////////////////////////////////////////////
    '////////////////////////////////////////////////////////////////////////
    <WebMethod(EnableSession:=True)>
    <ScriptMethod()>
    Public Shared Function listas()
        'Recoger los valores y organizarlos para la consulta de procesos - retorna sql
        Dim sql = "SELECT * FROM TABLE"

        'Agregar las columnas que tendra el arreglo
        Dim dt As DataTable = New DataTable
        dt.Columns.Add(New DataColumn("NUMERAL"))
        dt.Columns.Add(New DataColumn("AA"))
        dt.Columns.Add(New DataColumn("BB"))
        dt.Columns.Add(New DataColumn("CC"))
        dt.Columns.Add(New DataColumn("ACCIONES"))

        'Hacer consulta
        Dim SqlConnection As SqlConnection = New SqlConnection(conexionV)
        Dim SqlCommand As SqlCommand = New SqlCommand(sql, SqlConnection)

        'Continuar con ejecución
        SqlConnection.Open()
        Dim rs1 As SqlDataReader = SqlCommand.ExecuteReader()

        'Crear el arreglo para el JSON que retorna a la funcion de AJAX
        Dim divACCIONES = ""
        Dim numeral As Integer = 0

        While rs1.Read()
            numeral = numeral + 1
            'Crear el Boton de descargar
            divACCIONES = "<button type=""button"" class=""btn btn-primary"" onclick=""javascript:godocsSTIC('" + rs1("URLFOLDER") + "','" + rs1("URLDOC") + "')""><i class=""fas fa-file-download""></i><br>Ver</button>"
            'Aqui es donde finalmente se llena el arreglo de datos
            dt.Rows.Add(numeral, rs1("AA"), rs1("BB"), rs1("CC"), divACCIONES)
        End While

        'Cerrar y regresar JSON a AJAX
        rs1.Close()
        rs1 = Nothing
        SqlConnection.Close()
        SqlConnection.Dispose()

        'Convertir a JSON para retorno
        Dim resultadojson = JsonConvert.SerializeObject(dt)

        Return resultadojson
    End Function
