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
    var mainDiv = document.getElementById('actionMenu').innerHTML = '';

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
            url: '?controlador=Ventas&accion=mostrarInfoCompraVentas',
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
    //alert(temp[1]);
}