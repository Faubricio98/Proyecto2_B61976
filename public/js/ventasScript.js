function tipoCambio() {
    $.ajax(
        {
            url: '?controlador=Ventas&accion=getTipoCambioVentas',
            type: 'post',
            beforeSend: function () {
                $("#tipoCambio").html("Calculando ......");
            }, //antes de enviar
                    
            success: function (response) {
                var cambio = response.split('0');
                $("#tipoCambio").html(cambio[0]);
                //alert(parseFloat(cc));
            } //se ha enviado
        }
    );
}

function calculaCambio(dolar) {
    $.ajax(
        {
            url: '?controlador=Ventas&accion=getTipoCambioVentas',
            type: 'post',
            beforeSend: function () {
                $("#colones").html("Calculando ......");
            }, //antes de enviar
                    
            success: function (response) {
                var cambio = response.split('0');
                $("#colones").html(cambio[0]);
                var col = document.getElementById('colones').innerText;
                document.getElementById('colones').innerText ='₡'+parseFloat(col * dolar);
            } //se ha enviado
        }
    );
}

function calculaCambioArt(dolar, cod) {
    $.ajax(
        {
            url: '?controlador=Ventas&accion=getTipoCambioVentas',
            type: 'post',
            beforeSend: function () {
                $("#colones"+cod).html("Calculando ......");
            }, //antes de enviar
                    
            success: function (response) {
                var cambio = response.split('0');
                $("#"+cod).html(cambio[0]);
                var col = document.getElementById(cod).innerText;
                document.getElementById(cod).innerText ='₡'+parseFloat(col * dolar);
            } //se ha enviado
        }
    );
}

function btnCerrarSesion() { 
    window.location.href = 'index.php';
}

function btnVerCarrito() { 
    document.getElementById('actionMenu').innerHTML = "";
    var mySpan = document.getElementById('myUserCliente').innerText;
    var my_user = mySpan.split(" ");
    parametros = { "user": my_user[1] }
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Ventas&accion=obtenerClienteCarritoVentas',
            type: 'post',
            beforeSend: function () {
                $("#actionMenu").html("Trayendo del almacén tus artículos ......");
            }, //antes de enviar
                    
            success: function (response) {
                $("#actionMenu").html(response);
            } //se ha enviado
        }
    );
}

function optionsCantidad() { 
    var my_select = document.getElementById('cantidad');
    var init_option = document.createElement('option');
    init_option.setAttribute("value", "0");
    init_option.innerText = "Cantidad";
    my_select.append(init_option);

    for (var i = 1; i < 31; i++) {
        var init_option = document.createElement('option');
        init_option.setAttribute("value", i);
        init_option.innerText = i;
        my_select.append(init_option);
    }
}

function getAddress() { 
    var mySpan = document.getElementById('myUserCliente').innerText;
    var my_user = mySpan.split(" ");
    parametros = { "user": my_user[1] }
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Ventas&accion=direccionClienteVentas',
            type: 'post',
            beforeSend: function () {
                $("#spanEnvio").html("Cargando ......");
            }, //antes de enviar
                    
            success: function (response) {
                $("#spanEnvio").html(response);
            } //se ha enviado
        }
    );
}

function btnInicio() { 
    var mySpan = document.getElementById('myUserCliente').innerText;
    var my_user = mySpan.split(" ");
    window.location.href = '?controlador=Ventas&accion=mostrar&user='+my_user[1];
}

function btnBuscar() { 
    document.getElementById('actionMenu').innerHTML = '';
    var legCreateUser = document.createElement("legend");
    legCreateUser.setAttribute("class", "text-center");
    legCreateUser.innerHTML = "Buscar productos";
    document.getElementById("actionMenu").append(legCreateUser);

    var divNew = document.createElement('div');
    divNew.setAttribute("class", "row");
    divNew.setAttribute("id", "divNewRow");
    document.getElementById("actionMenu").append(divNew);

    var divNew = document.createElement('div');
    divNew.setAttribute("class", "col-md-3");
    document.getElementById("divNewRow").append(divNew);

    var divNew = document.createElement('div');
    divNew.setAttribute("class", "col-md-6");
    divNew.setAttribute("id", "divNew");
    document.getElementById("divNewRow").append(divNew);

    var divNew = document.createElement('div');
    divNew.setAttribute("class", "col-md-3");
    document.getElementById("divNewRow").append(divNew)

    var inputBusca = document.createElement('input');
    inputBusca.setAttribute("class", "form-control");
    inputBusca.setAttribute("id", "inputBusca");
    inputBusca.setAttribute("style", "margin-bottom: 1em;");
    inputBusca.setAttribute("placeholder", "Ingrese el nombre o la categoría del producto que busca");
    document.getElementById("divNew").append(inputBusca);

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
    labelR1.innerHTML = "Precio ascendente";
    divRadio.appendChild(inputR1);
    divRadio.appendChild(labelR1);
    document.getElementById("divNew").append(divRadio);

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
    labelR1.innerHTML = "Precio descendente";
    divRadio.appendChild(inputR1);
    divRadio.appendChild(labelR1);
    document.getElementById("divNew").append(divRadio);

    var btnCreate = document.createElement("button");
    btnCreate.setAttribute("id", "btnCreate");
    btnCreate.setAttribute("class", "btn btn-primary");
    btnCreate.setAttribute("onclick", "mostrarBusqueda()");
    btnCreate.innerHTML = "Buscar productos"
    document.getElementById("divNew").append(btnCreate);

    var divModo = document.createElement("div");
    divModo.setAttribute("id", "modoBusca");
    divModo.setAttribute("style", "margin-top: 2em;");
    document.getElementById("actionMenu").append(divModo);
}

function mostrarBusqueda() { 
    document.getElementById("modoBusca").innerHTML = " ";
    var mySearch = document.getElementById('inputBusca').value;
    var radio1 = document.getElementById("inlineRadio1");
    var radio2 = document.getElementById("inlineRadio2");

    if (mySearch == '') {
        document.getElementById("modoBusca").innerHTML = "Ingrese un nombre o una categoría";
    } else { 
        if (radio1.checked) {
            parametros = { "search": mySearch, "precio": 1 }
            $.ajax(
                {
                    data: parametros,
                    url: '?controlador=Ventas&accion=buscarArticuloPrecioVentas',
                    type: 'post',
                    beforeSend: function () {
                        $("#modoBusca").html("Trayendo los artículos del almacén ......");
                    }, //antes de enviar
                            
                    success: function (response) {
                        $("#modoBusca").html(response);
                    } //se ha enviado
                }
            );
        } else { 
            if (radio2.checked) {
                parametros = { "search": mySearch, "precio": 2 }
                $.ajax(
                    {
                        data: parametros,
                        url: '?controlador=Ventas&accion=buscarArticuloPrecioVentas',
                        type: 'post',
                        beforeSend: function () {
                            $("#modoBusca").html("Trayendo los artículos del almacén ......");
                        }, //antes de enviar
                                
                        success: function (response) {
                            $("#modoBusca").html(response);
                        } //se ha enviado
                    }
                );
            } else { 
                document.getElementById("modoBusca").innerHTML = "Seleccione la forma en la que deben aparecer los artículos";
            }
        }
    }
}

function btnHistorial() { 
    document.getElementById('actionMenu').innerHTML = '';
    var spanC = document.getElementById("myUserCliente").innerText;
    var my_user = spanC.split(' ');
    parametros = { "user": my_user[1] }
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Ventas&accion=mostrarHistorialVentas',
            type: 'post',
            beforeSend: function () {
                $("#actionMenu").html("Mostrando tus facturas ......");
            }, //antes de enviar
                    
            success: function (response) {
                $("#actionMenu").html(response);
            } //se ha enviado
        }
    );
}

function btnComprar(button) {
    document.getElementById('actionMenu').innerHTML = '';
    var spanC = document.getElementById("myUserCliente").innerText;
    var my_user = spanC.split(' ');
    parametros = { "user": my_user[1], "cod": button.id }
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Ventas&accion=mostrarArticuloVentas',
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

function btnCompra(button) {
    var spanC = document.getElementById("myUserCliente").innerText;
    var my_user = spanC.split(' ');
    parametros = {"cod": button.id }
    //ventana de informacion para la compra
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Ventas&accion=mostrarInfoCompraVentas',
            type: 'post',
            beforeSend: function () {
                $("#actionMenu").html("Mostrando ......");
            }, //antes de enviar
                    
            success: function (response) {
                $("#actionMenu").html(response);
            } //se ha enviado
        }
    );
}

function getCliente() { 
    var spanC = document.getElementById("myUserCliente").innerText;
    var my_user = spanC.split(' ');
    parametros = { "user": my_user[1] }
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Ventas&accion=verInfoClienteVentas',
            type: 'post',
            beforeSend: function () {
                $("#infoCliente").html("Cargando ......");
            }, //antes de enviar
                    
            success: function (response) {
                $("#infoCliente").html(response);
            } //se ha enviado
        }
    );
}

function btnCarrito(button) { 
    var spanC = document.getElementById("myUserCliente").innerText;
    var my_user = spanC.split(' ');
    parametros = { "user": my_user[1], "cod": button.id }
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Ventas&accion=guardarCarritoVentas',
            type: 'post',
            beforeSend: function () {
                $("#respuesta").html("Carrito ...");
            }, //antes de enviar
                    
            success: function (response) {
                $("#respuesta").html(response);
            } //se ha enviado
        }
    );
}

function btnFavorito(button) { 
    var spanC = document.getElementById("myUserCliente").innerText;
    var my_user = spanC.split(' ');
    parametros = {"user": my_user[1], "cod": button.id}
    //CREATE PROCEDURE sp_get_favorito()
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Ventas&accion=guardarFavoritoVentas',
            type: 'post',
            beforeSend: function () {
                $("#respuesta").html("Favorito ...");
            }, //antes de enviar
                    
            success: function (response) {
                $("#respuesta").html(response);
            } //se ha enviado
        }
    );
}

function primerFavorito() {
    $.ajax(
        {
            url: '?controlador=Ventas&accion=mostrarPrimerFavoritoVentas',
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
            url: '?controlador=Ventas&accion=mostrarSegundoFavoritoVentas',
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
            url: '?controlador=Ventas&accion=mostrarTercerFavoritoVentas',
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

function btnPromocion() { 
    var mainDiv = document.getElementById('actionMenu').innerHTML = '';
}

function btnPagar(button) {
    var mySelect = document.getElementById('cantidad').value;
    var myCard = document.getElementById('numCard').value;
    var mySecCard = document.getElementById('numSecCard').value;

    if (myCard == '') {
        document.getElementById('spanPago').innerHTML = "Ingrese el número de tarjeta";
    } else { 
        if (mySecCard == '') {
            document.getElementById('spanPago').innerHTML = "Ingrese el código de seguridad";
        } else { 
            if (mySelect == 0) {
                document.getElementById('spanPago').innerHTML = "Seleccione una cantidad";
            } else { // todo está correcto
                var mySpan = document.getElementById('myUserCliente').innerText;
                var my_user = mySpan.split(" ");
                sessionStorage.setItem("codProd", button.id);
                sessionStorage.setItem("user", my_user[1]);
                sessionStorage.setItem("cant", mySelect);
                parametros = { "cod": button.id, "cant": mySelect, "user": my_user[1] };
                $.ajax(
                    {
                        data: parametros,
                        url: '?controlador=Ventas&accion=pagarFacturaVentas',
                        type: 'post',
                        beforeSend: function () {
                            $("#spanPago").html("Pagando ......");
                        }, //antes de enviar
                                
                        success: function (response) {
                            $("#spanPago").html(response);
                            window.location.href = '?controlador=Ventas&accion=mostrarFacturaVentas&user='+my_user[1]+'&cod='+button.id;
                        } //se ha enviado
                    }
                );
            }
        }
    }
}

function getFactura() {
    document.getElementById('codProducto').innerHTML = "Código: " + sessionStorage.getItem("codProd");
    document.getElementById('cantProducto').innerHTML = "Cantidad: " + sessionStorage.getItem("cant");
    parametros = { "user": sessionStorage.getItem("user"), "cod": sessionStorage.getItem("codProd") };    
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Ventas&accion=obtenerFacturaVentas',
            type: 'post',
            beforeSend: function () {
                $("#codFac").html("");
            }, //antes de enviar
                        
            success: function (response) {
                $("#codFac").html(response);                
            } //se ha enviado
        }
    );

    $.ajax(
        {
            data: parametros,
            url: '?controlador=Ventas&accion=verProductoCompraVentas',
            type: 'post',
            beforeSend: function () {
                $("#nomProducto").html("");
            }, //antes de enviar
                        
            success: function (response) {
                $("#nomProducto").html(response);                
            } //se ha enviado
        }
    );

    $.ajax(
        {
            data: parametros,
            url: '?controlador=Ventas&accion=verPrecioCompraVentas',
            type: 'post',
            beforeSend: function () {
                $("#precioUProducto").html("");
            }, //antes de enviar
                        
            success: function (response) {
                $("#precioUProducto").html('Precio: $' + response);
                document.getElementById('costoProducto').innerHTML = 'Costo Total: $' + Math.round((response * sessionStorage.getItem("cant"))*100)/100;
                //document.getElementById('costoProducto').innerHTML = precioTotal;
            } //se ha enviado
        }
    );

    $.ajax(
        {
            url: '?controlador=Ventas&accion=getTipoCambioVentas',
            type: 'post',
            beforeSend: function () {
                $("#colones").html("Calculando ......");
            }, //antes de enviar
                    
            success: function (response) {
                var cambio = response.split('0');
                $("#colones").html(cambio[0]);
                var col = document.getElementById('colones').innerText;
                var cn = sessionStorage.getItem("cant");
                var temp = document.getElementById('costoProducto').innerHTML;
                var dol = temp.split('$');
                document.getElementById('colones').innerText ='Precio Total: ₡'+parseFloat(col*dol[1]);
            } //se ha enviado
        }
    );
    //alert(temp[1]);
}