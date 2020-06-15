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