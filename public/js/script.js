function showLogIn() { 
    document.getElementById('actionMenu').innerHTML = "";
    $.ajax(
        {
            url: '?controlador=Index&accion=mostrarInicioSesionIndex',
            type: 'post',
            beforeSend: function () {
                $("#actionMenu").html("Cargando ......");
            }, //antes de enviar
                    
            success: function (response) {
                $("#actionMenu").html(response);
            } //se ha enviado
        }
    );
}

function primerFavorito() {
    $.ajax(
        {
            url: '?controlador=Ventas&accion=mostrarPrimerFavoritoInicioVentas',
            type: 'post',
            beforeSend: function () {
                $("#carta1").html("Buscando favoritos ...");
            }, //antes de enviar
                    
            success: function (response) {
                $("#carta1").html(response);
            } //se ha enviado
        }
    );
}

function segundoFavorito() { 
    $.ajax(
        {
            url: '?controlador=Ventas&accion=mostrarSegundoFavoritoInicioVentas',
            type: 'post',
            beforeSend: function () {
                $("#carta2").html("Buscando favoritos ...");
            }, //antes de enviar
                    
            success: function (response) {
                $("#carta2").html(response);
            } //se ha enviado
        }
    );
}

function tercerFavorito() { 
    $.ajax(
        {
            url: '?controlador=Ventas&accion=mostrarTercerFavoritoInicioVentas',
            type: 'post',
            beforeSend: function () {
                $("#carta3").html("Buscando favoritos ...");
            }, //antes de enviar
                    
            success: function (response) {
                $("#carta3").html(response);
            } //se ha enviado
        }
    );
}

function btnGenerarZIP() {
    var dist = document.getElementById('distritoUser').value;
    var cant = document.getElementById('cantonUser').value;
    var prov = document.getElementById('provincia').value;

    parametros = { "dist": dist, "cant": cant, "prov": prov };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Cliente&accion=generarCodigoPostalCliente',
            type: 'post',
            beforeSend: function () {
                $("#postal_code").html("Buscando ...");
            }, //antes de enviar
                    
            success: function (response) {
                $("#postal_code").html(response);
            } //se ha enviado
        }
    );
}

function logAdm(userAdmin, passAdmin) {
    var parametros = { "user": userAdmin, "pass": passAdmin };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Administrador&accion=logInAdministrador',
            type: 'post',
            beforeSend: function () {
                $("#resultadoA").html("Buscando ...");
            }, //antes de enviar
                    
            success: function (response) {
                if (response == 1) {
                    var my_user = document.getElementById('userAdmin').value
                    window.location.href = '?controlador=Administrador&accion=mostrar&user='+my_user;
                } else { 
                    $("#resultadoA").html('No existe un registro para el usuario o contraseña ingresados');
                }
            } //se ha enviado
        }
    );
}

function signInCliente() {
    window.location.href = '?controlador=Cliente&accion=mostrarSignIn';
}

function openLogAdm() {
    document.getElementById('hBienvenida').innerHTML = 'Bienvenido ';
}

function logClient() {
    
}

function btnCrearUsuario(){
    document.getElementById("actionMenu").innerHTML= "";
    var legCreateUser = document.createElement("legend");
    legCreateUser.setAttribute("class", "text-center");
    legCreateUser.innerHTML = "Crear un usuario administrativo";
    document.getElementById("actionMenu").append(legCreateUser);

    var inputUserName = document.createElement("input");
    inputUserName.setAttribute("id", "userName");
    inputUserName.setAttribute("class", "form-control");
    inputUserName.setAttribute("placeholder", "Nombre de usuario");
    inputUserName.setAttribute("type", "text");
    document.getElementById("actionMenu").append(inputUserName);

    var inputUserPass = document.createElement("input");
    inputUserPass.setAttribute("id", "userPass");
    inputUserPass.setAttribute("class", "form-control");
    inputUserPass.setAttribute("placeholder", "Contraseña");
    inputUserPass.setAttribute("type", "password");
    document.getElementById("actionMenu").append(inputUserPass);

    var btnCreate = document.createElement("button");
    btnCreate.setAttribute("id", "btnCreate");
    btnCreate.setAttribute("class", "btn btn-primary");
    btnCreate.setAttribute("onclick", "crearAdmin($('#userName').val(), $('#userPass').val())");
    btnCreate.innerHTML = "Crear nuevo administrador"
    document.getElementById("actionMenu").append(btnCreate);

    var spanResultado = document.createElement("span");
    spanResultado.setAttribute("id", "resultado");
    document.getElementById("actionMenu").append(spanResultado);
}

function crearAdmin(userName, pass) {
    var parametros = { "user": userName, "pass": pass };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Administrador&accion=signInAdministrador',
            type: 'post',
            beforeSend: function () {
                $("#resultado").html("Creando ...");
            }, //antes de enviar
                    
            success: function (response) {
                $("#resultado").html(response);
            } //se ha enviado
        }
    );
}

function btnCrearProducto(){
    document.getElementById("actionMenu").innerHTML = "";
    $.ajax(
        {
            url: '?controlador=Administrador&accion=newProdAdministrador',
            type: 'post',
            beforeSend: function () {
                $("#actionMenu").html("Creando ...");
            }, //antes de enviar
                    
            success: function (response) {
                $("#actionMenu").html(response);
            } //se ha enviado
        }
    );
}

function crearProd(cod, name, price, ctg, desc) {
    //var property = document.getElementById('uploadedFile').files[0];
    //var img = property.name;
    //var parametros = { "cod": cod, "name": name, "price": price, "category": ctg, "desc": desc, "img": img };
    var property = document.getElementById('uploadedFile').files[0];
    var image_name = property.name;
    var image_extension = image_name.split('.').pop().toLowerCase();

    if (jQuery.inArray(image_extension, ['png', 'gif', 'jpg', 'jpeg', '']) == -1) {
        alert("Formato del archivo incorrecto");
    } else {
        var form_data = new FormData();
        form_data.append("cod", cod);
        form_data.append("name", name);
        form_data.append("price", price);
        form_data.append("category", ctg);
        form_data.append("desc", desc);
        form_data.append("img", image_name);
        form_data.append("file",property);
        $.ajax(
            {
                url: '?controlador=Administrador&accion=registrarProductoAdministrador',
                method:'POST',
                data:form_data,
                contentType:false,
                cache:false,
                processData:false,
                beforeSend:function(){
                    $('#resultado').html('Loading......');
                },
                success:function(data){
                    $('#resultado').html(data);
                }
            }
        );
    }
}

function btnCrearCategoria() { 
    document.getElementById("actionMenu").innerHTML= "";
    var legCreateUser = document.createElement("legend");
    legCreateUser.setAttribute("class", "text-center");
    legCreateUser.innerHTML = "Crear una nueva categoría";
    document.getElementById("actionMenu").append(legCreateUser);

    var inputUserName = document.createElement("input");
    inputUserName.setAttribute("id", "codCat");
    inputUserName.setAttribute("class", "form-control");
    inputUserName.setAttribute("placeholder", "Código de la catagoría");
    inputUserName.setAttribute("type", "text");
    document.getElementById("actionMenu").append(inputUserName);

    var inputUserPass = document.createElement("input");
    inputUserPass.setAttribute("id", "nameCat");
    inputUserPass.setAttribute("class", "form-control");
    inputUserPass.setAttribute("placeholder", "Nombre de la categoría");
    inputUserPass.setAttribute("type", "text");
    document.getElementById("actionMenu").append(inputUserPass);

    var btnCreate = document.createElement("button");
    btnCreate.setAttribute("id", "btnCreate");
    btnCreate.setAttribute("class", "btn btn-primary");
    btnCreate.setAttribute("onclick", "crearCategory($('#codCat').val(), $('#nameCat').val())");
    btnCreate.innerHTML = "Crear nueva categoría"
    document.getElementById("actionMenu").append(btnCreate);

    var spanResultado = document.createElement("span");
    spanResultado.setAttribute("id", "resultado");
    document.getElementById("actionMenu").append(spanResultado);
}

function crearCategory(codCat, nameCat) { 
    parametros = { "cod": codCat, "name": nameCat };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Administrador&accion=registrarCategoriaAdministrador',
            type: 'post',
            beforeSend: function () {
                $("#resultado").html("Creando ...");
            }, //antes de enviar
                    
            success: function (response) {
                $("#resultado").html(response);
            } //se ha enviado
        }
    );
}

function btnCrearPromocion() { 
    document.getElementById("actionMenu").innerHTML= "";
    var legCreateUser = document.createElement("legend");
    legCreateUser.setAttribute("class", "text-center");
    legCreateUser.innerHTML = "Crear una nueva promocion";
    document.getElementById("actionMenu").append(legCreateUser);

    var inputUserName = document.createElement("input");
    inputUserName.setAttribute("id", "codProm");
    inputUserName.setAttribute("class", "form-control");
    inputUserName.setAttribute("placeholder", "Código de la promoción");
    inputUserName.setAttribute("type", "text");
    document.getElementById("actionMenu").append(inputUserName);

    var inputUserName = document.createElement("input");
    inputUserName.setAttribute("id", "codProds");
    inputUserName.setAttribute("class", "form-control");
    inputUserName.setAttribute("placeholder", "Códigos de productos (separados por un espacio)");
    inputUserName.setAttribute("type", "text");
    document.getElementById("actionMenu").append(inputUserName);

    var btnCreate = document.createElement("button");
    btnCreate.setAttribute("id", "btnCreate");
    btnCreate.setAttribute("type", "button");
    btnCreate.setAttribute("data-toggle", "modal");
    btnCreate.setAttribute("data-target", "#modInvita");
    btnCreate.setAttribute("class", "btn btn-primary");
    btnCreate.setAttribute("onclick", "verProductos()");
    btnCreate.innerHTML = "Ver la lista de productos registrados";
    document.getElementById("actionMenu").append(btnCreate);

    var inputDescuento = document.createElement("input");
    inputDescuento.setAttribute("id", "descProm");
    inputDescuento.setAttribute("class", "form-control");
    inputDescuento.setAttribute("placeholder", "Descuento");
    inputDescuento.setAttribute("type", "number");
    document.getElementById("actionMenu").append(inputDescuento);

    var inputDate = document.createElement("input");
    inputDate.setAttribute("placeholder", "Fecha de inicio");
    inputDate.setAttribute("type","text");
    inputDate.setAttribute("onfocus","(this.type='date')");
    inputDate.setAttribute("id","dateStart");
    inputDate.setAttribute("class", "form-control");
    document.getElementById("actionMenu").append(inputDate);

    var inputDate = document.createElement("input");
    inputDate.setAttribute("placeholder", "Fecha de finalización");
    inputDate.setAttribute("type","text");
    inputDate.setAttribute("onfocus","(this.type='date')");
    inputDate.setAttribute("id","dateEnd");
    inputDate.setAttribute("class", "form-control");
    document.getElementById("actionMenu").append(inputDate);

    var btnCreate = document.createElement("button");
    btnCreate.setAttribute("id", "btnCreate");
    btnCreate.setAttribute("class", "btn btn-primary");
    btnCreate.setAttribute("onclick", "crearPromotion($('#codProm').val(), $('#codProds').val(), $('#descProm').val(), $('#dateStart').val(), $('#dateEnd').val())");
    btnCreate.innerHTML = "Crear nueva promoción"
    document.getElementById("actionMenu").append(btnCreate);

    var spanResultado = document.createElement("span");
    spanResultado.setAttribute("id", "resultado");
    document.getElementById("actionMenu").append(spanResultado);
}

function verProductos() { 
    $.ajax(
        {
            url: '?controlador=Administrador&accion=verProductosAdministrador',
            type: 'post',
            beforeSend: function () {
                $("#table-products").html("Cargando ...");
            }, //antes de enviar
                    
            success: function (response) {
                $("#table-products").html(response);
            } //se ha enviado
        }
    );
}

function crearPromotion(cod, prods, desc, dateStart, dateEnd) { 
    parametros = { "cod": cod, "desc": desc, "dateS": dateStart, "dateE": dateEnd };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Administrador&accion=registrarPromocionAdministrador',
            type: 'post',
            beforeSend: function () {
                $("#resultado").html("Creando ...");
            }, //antes de enviar
                    
            success: function (response) {
                $("#resultado").html(response);
            } //se ha enviado
        }
    );

    //hay que ir a registrar la promoción por cada artículo
    var listProds = prods.split(" ");
    for (i = 0; i < listProds.length; i++) { 
        parametros1 = { "cod": cod, "prod": listProds[i], "desc": desc };
        $.ajax(
            {
                data: parametros1,
                url: '?controlador=Administrador&accion=registrarPromProdAdministrador',
                type: 'post',
                beforeSend: function () {
                    $("#resultado").html("Creando ...");
                }, //antes de enviar
                        
                success: function (response) {
                    $("#resultado").html(response);
                } //se ha enviado
            }
        );
    }
    //hay que ir a registrar la promoción por cada artículo
    btnCrearPromocion();
}

function btnCerrarSesion() { 
    window.location.href = 'index.php';
}

function btnVerVetas() {
    document.getElementById("actionMenu").innerHTML= "";
    var legCreateUser = document.createElement("legend");
    legCreateUser.setAttribute("class", "text-center");
    legCreateUser.innerHTML = "Ventas de Centro de Limpieza Don Limpio";
    document.getElementById("actionMenu").append(legCreateUser);

    var labelModo = document.createElement("label");
    //labelModo.setAttribute("class", "form-check-label");
    labelModo.innerHTML = "Seleccione el modo de búsqueda";
    document.getElementById("actionMenu").append(labelModo);

    var divRadio = document.createElement("div");
    divRadio.setAttribute("class", "form-check form-check-inline col-sm-10");
    var inputR1 = document.createElement("input");
    inputR1.setAttribute("class", "form-check-input");
    inputR1.setAttribute("type", "radio");
    inputR1.setAttribute("name", "inlineRadioOptions");
    inputR1.setAttribute("id", "inlineRadio1");
    inputR1.setAttribute("value", "option1");
    var labelR1 = document.createElement("label");
    labelR1.setAttribute("class", "form-check-label");
    labelR1.setAttribute("for", "inlineRadio1");
    labelR1.innerHTML = "Mes / Año";
    divRadio.appendChild(inputR1);
    divRadio.appendChild(labelR1);
    document.getElementById("actionMenu").append(divRadio);

    var divRadio = document.createElement("div");
    divRadio.setAttribute("class", "form-check form-check-inline col-sm-10");
    var inputR1 = document.createElement("input");
    inputR1.setAttribute("class", "form-check-input");
    inputR1.setAttribute("type", "radio");
    inputR1.setAttribute("name", "inlineRadioOptions");
    inputR1.setAttribute("id", "inlineRadio2");
    inputR1.setAttribute("value", "option2");
    var labelR1 = document.createElement("label");
    labelR1.setAttribute("class", "form-check-label");
    labelR1.setAttribute("for", "inlineRadio2");
    labelR1.innerHTML = "Fecha de inicio / Fecha final";
    divRadio.appendChild(inputR1);
    divRadio.appendChild(labelR1);
    document.getElementById("actionMenu").append(divRadio);

    var btnCreate = document.createElement("button");
    btnCreate.setAttribute("id", "btnCreate");
    btnCreate.setAttribute("class", "btn btn-primary");
    btnCreate.setAttribute("onclick", "crearModo()");
    btnCreate.innerHTML = "Abrir modo de búsqueda"
    document.getElementById("actionMenu").append(btnCreate);

    var divModo = document.createElement("div");
    divModo.setAttribute("id", "modoBusca");
    divModo.setAttribute("style", "margin-top: 2em;");
    document.getElementById("actionMenu").append(divModo);
}

function crearModo() {
    document.getElementById("modoBusca").innerHTML = " ";
    var radio1 = document.getElementById("inlineRadio1");
    var radio2 = document.getElementById("inlineRadio2");

    if (radio1.checked) {

        var legCreateUser = document.createElement("legend");
        legCreateUser.setAttribute("class", "text-center");
        legCreateUser.innerHTML = "Seleccione un mes y un año";
        document.getElementById("modoBusca").append(legCreateUser);

        var mySelect = document.createElement("select");
        mySelect.setAttribute("class", "custom-select");
        mySelect.setAttribute("id", "myMonth");
        var def = document.createElement("option");
        def.setAttribute("value", "0");
        def.innerHTML = "Seleccione un mes";
        var enero = document.createElement("option");
        enero.setAttribute("value", "01");
        enero.innerHTML = "Enero";
        var febrero = document.createElement("option");
        febrero.setAttribute("value", "02");
        febrero.innerHTML = "Febrero";
        var marzo = document.createElement("option");
        marzo.setAttribute("value", "03");
        marzo.innerHTML = "Marzo";
        var abril = document.createElement("option");
        abril.setAttribute("value", "04");
        abril.innerHTML = "Abril";
        var mayo = document.createElement("option");
        mayo.setAttribute("value", "05");
        mayo.innerHTML = "Mayo";
        var junio = document.createElement("option");
        junio.setAttribute("value", "06");
        junio.innerHTML = "Junio";
        var julio = document.createElement("option");
        julio.setAttribute("value", "07");
        julio.innerHTML = "Julio";
        var agosto = document.createElement("option");
        agosto.setAttribute("value", "08");
        agosto.innerHTML = "Agosto";
        var setiembre = document.createElement("option");
        setiembre.setAttribute("value", "09");
        setiembre.innerHTML = "Setiembre";
        var octubre = document.createElement("option");
        octubre.setAttribute("value", "10");
        octubre.innerHTML = "Octubre";
        var noviembre = document.createElement("option");
        noviembre.setAttribute("value", "11");
        noviembre.innerHTML = "Noviembre";
        var diciembre = document.createElement("option");
        diciembre.setAttribute("value", "12");
        diciembre.innerHTML = "Diciembre";

        mySelect.appendChild(def);
        mySelect.appendChild(enero);
        mySelect.appendChild(febrero);
        mySelect.appendChild(marzo);
        mySelect.appendChild(abril);
        mySelect.appendChild(mayo);
        mySelect.appendChild(junio);
        mySelect.appendChild(julio);
        mySelect.appendChild(agosto);
        mySelect.appendChild(setiembre);
        mySelect.appendChild(octubre);
        mySelect.appendChild(noviembre);
        mySelect.appendChild(diciembre);
        document.getElementById("modoBusca").append(mySelect);

        var mySelect = document.createElement("select");
        mySelect.setAttribute("class", "custom-select");
        mySelect.setAttribute("id", "myYear");
        mySelect.setAttribute("style", "margin-top: 1em;");
        var def = document.createElement("option");
        def.setAttribute("value", "0");
        def.innerHTML = "Seleccione un año";
        mySelect.appendChild(def);
        for (i = 2020; i >= 2000; i--) { 
            var year = document.createElement("option");
            year.setAttribute("value", i);
            year.innerHTML = i;
            mySelect.appendChild(year);
        }
        document.getElementById("modoBusca").append(mySelect);

        var btnCreate = document.createElement("button");
        btnCreate.setAttribute("id", "btnCreate");
        btnCreate.setAttribute("class", "btn btn-primary");
        btnCreate.setAttribute("onclick", "buscarMesAnno()");
        btnCreate.innerHTML = "Ver ventas";
        document.getElementById("modoBusca").append(btnCreate);
        var spanRes = document.createElement('span');
        spanRes.setAttribute("id", "spanRes");
        document.getElementById("modoBusca").append(spanRes);
    }

    if (radio2.checked) {
        var legCreateUser = document.createElement("legend");
        legCreateUser.setAttribute("class", "text-center");
        legCreateUser.innerHTML = "Seleccione un rango de fechas";
        document.getElementById("modoBusca").append(legCreateUser);

        var inputDate = document.createElement("input");
        inputDate.setAttribute("placeholder", "Fecha de inicio");
        inputDate.setAttribute("type","text");
        inputDate.setAttribute("onfocus","(this.type='date')");
        inputDate.setAttribute("id","dateStart");
        inputDate.setAttribute("class", "form-control");
        document.getElementById("modoBusca").append(inputDate);

        var inputDate = document.createElement("input");
        inputDate.setAttribute("placeholder", "Fecha de finalización");
        inputDate.setAttribute("type","text");
        inputDate.setAttribute("onfocus","(this.type='date')");
        inputDate.setAttribute("id","dateEnd");
        inputDate.setAttribute("class", "form-control");
        document.getElementById("modoBusca").append(inputDate);

        var btnCreate = document.createElement("button");
        btnCreate.setAttribute("id", "btnCreate");
        btnCreate.setAttribute("class", "btn btn-primary");
        btnCreate.setAttribute("onclick", "buscarFechas()");
        btnCreate.innerHTML = "Ver ventas";
        document.getElementById("modoBusca").append(btnCreate);

        var spanRes = document.createElement('span');
        spanRes.setAttribute("id", "spanRes");
        document.getElementById("modoBusca").append(spanRes);
    }
}

function buscarMesAnno() {
    var myMonth = document.getElementById('myMonth').value;
    var myYear = document.getElementById('myYear').value;
    
    if (myMonth == 0) {
        document.getElementById('spanRes').innerHTML = "Seleccione un mes";
    } else { 
        if (myYear == 0) {
            document.getElementById('spanRes').innerHTML = "Seleccione un año";
        } else { 
            parametros = { "mes": myMonth, "year": myYear }
            $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Administrador&accion=verVentasMesAnnoAdministrador',
                    type: 'post',
                    beforeSend: function () {
                        $("#modoBusca").html("Buscando ...");
                    }, //antes de enviar
                                    
                    success: function (response) {
                        document.getElementById("modoBusca").innerHTML = " ";
                        $("#modoBusca").html(response);
                    } //se ha enviado
                }
            ); //ajax
        }
    }
}

function buscarFechas() {
    var dateS = document.getElementById('dateStart').value;
    var dateE = document.getElementById('dateEnd').value;

    if (dateS == '') {
        document.getElementById('spanRes').innerHTML = "Ingrese las fechas correctamente";
    } else { 
        if (dateE == '') {
            document.getElementById('spanRes').innerHTML = "Ingrese las fechas correctamente";
        } else { // todo está bien
            parametros = { "ds": dateS, "de": dateE }
            $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Administrador&accion=verVentasFechasAdministrador',
                    type: 'post',
                    beforeSend: function () {
                        $("#modoBusca").html("Buscando ...");
                    }, //antes de enviar
                                    
                    success: function (response) {
                        document.getElementById("modoBusca").innerHTML = " ";
                        $("#modoBusca").html(response);
                    } //se ha enviado
                }
            ); //ajax
        }
    }
}

function btnCrearCliente(nom, apel, age, cant, dist, dir, user, mail, pass, cPass) { 
    var gen = document.getElementById('myGenre').value;
    var prov = document.getElementById('provincia').value;

    if (pass != cPass) {
        document.getElementById('resultadoSignIn').innerHTML = "Asegúrese de escribir correctamente la contraseña";
    } else {
        if (gen == 0) {
            document.getElementById('resultadoSignIn').innerHTML = "Seleccione su género";
        } else { 
            if (prov == 0) {
                document.getElementById('resultadoSignIn').innerHTML = "Seleccione la provincia en la que ud vive";
            } else { 
                if (nom === '' || apel === '' || age === '' || cant === '' || dist === '' || dir === '' || user === '' || pass === '' || cPass === '') {
                    document.getElementById('resultadoSignIn').innerHTML = "Asegúrese de haber rellenado todos los espacios";
                } else {
                    parametros = {
                        "nombre": nom,
                        "apel": apel, 
                        "edad": age,
                        "gen": gen,
                        "prov": prov,
                        "canton": cant,
                        "dist": dist,
                        "address": dir,
                        "user": user,
                        "email": mail,
                        "pass": pass
                    };

                    $.ajax(
                        {
                            data: parametros,
                            url: '?controlador=Cliente&accion=signInCliente',
                            type: 'post',
                            beforeSend: function () {
                                $("#resultadoSignIn").html("Creando ...");
                            }, //antes de enviar
                                    
                            success: function (response) {
                                if (response == 1) { 
                                    $("#resultadoSignIn").html('Usuario creado correctamente. Diríjase al inicio para que pueda iniciar sesión.');
                                }
                                if (response == 0) { 
                                    $("#resultadoSignIn").html(user + ' ya existe como nombre de usuario');
                                }
                            } //se ha enviado
                        }
                    ); //ajax
                } // todo está correcto
            } // provincia seleccionada
        }//genero seleccionado
    } // contraseñas iguales
}

function returnToIndex() { 
    window.location.href = '?controlador=Index&accion=mostrar';
}

function logInCliente(user, pass) { 
    parametros = { "user": user, "pass": pass }
    sessionStorage.setItem("user", user);
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Cliente&accion=logCliente',
            type: 'post',
            beforeSend: function () {
                $("#resultadoC").html("Iniciando sesión .......");
            }, //antes de enviar

            success: function (response) {
                if (response == 1) {
                    my_par = { "user": user }
                    $.ajax(
                        {
                            data: my_par,
                            url: '?controlador=Ventas&accion=getUsuarioCliente',
                            type: 'post',
                            success: function (response) { 
                                window.location.href = '?controlador=Ventas&accion=mostrar&user='+response;
                            }
                        }
                    );
                }
                if (response == 0 || response > 1) {
                    $("#resultadoC").html('Usuario o contraseña incorrectos. Si aun no está registrado, presione el botón Sign In');
                }
            } //se ha enviado
        }
    ); //ajax
}