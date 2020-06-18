<?php
    include_once 'public/compraHeader.php';
?>

<div class="row">
    <div class="col-md-3"></div>
    <div class="col" style="border: 2px solid gray; border-radius: 5px; margin-left: 1em;">
        <legend class="text-center">
            <img src="public/img/my_icon.svg" width="30" height="30">
            Factura - <span id="codFac"></span>
        </legend>
        <span>Producto</span> <br>
        <span id="codProducto"></span> <br>
        <span id="nomProducto"></span> <br>
        <span id="cantProducto"></span> <br>
        <span id="precioUProducto"></span> <br>
        <span id="costoProducto"></span> <br>
        <span id="tarjeta">Modo de pago: Transferencia</span> <br>
        <br>
        <span>Cliente</span> <br>
        <span id="infoCliente"></span>
        <script>getFactura()</script>
        <script>getCliente()</script>
    </div>
    <div class="col-md-3"></div>
</div>

<?php
    include_once 'public/footer.php';
?>