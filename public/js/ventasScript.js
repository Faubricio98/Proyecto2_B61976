function btnInicio() { 
    var mySpan = document.getElementById('myUserCliente').innerText;
    var my_user = mySpan.split(" ");
    window.location.href = '?controlador=Ventas&accion=mostrar&user='+my_user[1];
}

function btnBuscar() { 
    var mainDiv = document.getElementById('actionMenu').innerHTML = '';

}

function btnComprar(button) {
    alert(button.id);
}

function btnCarrito(button) { 

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
                $("#respuesta").html("Agregando a favoritos ...");
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