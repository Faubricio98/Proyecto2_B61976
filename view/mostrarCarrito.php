<?php
    foreach ($vars['carrito'] as $item) {
?>

    <div class= "row">
        <div class="col" style="border-bottom: 2px solid gray; margin-bottom: 1em;">
            <div class="row">
                <div class="col-md-4"  style="margin-bottom: 1em;">
                    <img src="public/img/<?php echo $item[4]; ?>" width="100%" height="100%" class="d-inline-block align-top" alt="">
                </div>

                <div class="col">
                    <legend><?php echo $item[1]; ?></legend>
                    <span>C&oacute;digo: <?php echo $item[0]; ?></span> <br>
                    <span>Precio: $<?php echo $item[2]; ?></span><br>
                    <span id="colones"></span> <br>
                    <script>calculaCambio(<?php echo $item[2]; ?>)</script>
                    <span>Categor&iacute;a: <?php echo $item[3]; ?></span><br>
                    <button type="button" class="btn btn-primary text-center" style="margin-bottom: 1em; margin-top: 1em; font-size: 0.8em; width: 100%" id="<?php echo $item[0];?>" onclick="btnCompra(this)">
                        <img src="public/img/my_buy.svg" width="20" height="20">
                        Comprar ahora
                    </button>
                    <button type="button" class="btn btn-primary text-center" style="margin-bottom: 1em; font-size: 0.7em; width: 100%;" id="<?php echo $item[0];?>" onclick="btnCarrito(this)">
                        <img src="public/img/my_cart.svg" width="20" height="20">
                        Eliminar del carrito
                    </button>
                    <span id="respuesta"></span>
                </div>
                <div class="col">
                    <span>Descripci&oacute;n: <?php echo $item[5]; ?></span>
                </div>
            </div>
        </div>
    </div>

<?php
    }
?>