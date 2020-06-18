<?php
    foreach ($vars['articulo'] as $item) {
?>

    <div class= "row">
        <div class="col" style="border-bottom: 2px solid gray; margin-bottom: 1em;">
            <div class="row">
                <div class="col-md-4"  style="margin-bottom: 1em;">
                    <img src="public/img/<?php echo $item[5]; ?>" width="100%" height="100%" class="d-inline-block align-top" alt="">
                </div>

                <div class="col">
                    <legend><?php echo $item[1]; ?></legend>
                    <span>C&oacute;digo: <?php echo $item[0]; ?></span> <br>
                    <span>Precio: $<?php echo $item[2]; ?></span><br>
                    <span id="<?php echo $item[0]; ?>">
                        <script id>calculaCambioArt('<?php echo $item[2];?>', '<?php echo $item[0];?>')</script>
                    </span> <br>
                    <span>Categor&iacute;a: <?php echo $item[3]; ?></span><br>
                    <button type="button" class="btn btn-primary text-center" style="margin-bottom: 1em; margin-top: 1em; font-size: 0.8em; width: 100%" id="<?php echo $item[0];?>" onclick="btnCompra(this)">
                        <img src="public/img/my_buy.svg" width="20" height="20">
                         Comprar ahora
                    </button>
                    <button type="button" class="btn btn-primary text-center" style="margin-bottom: 1em; font-size: 0.8em; width: 100%;" id="<?php echo $item[0];?>" onclick="btnCarrito(this)">
                        <img src="public/img/my_cart.svg" width="20" height="20">
                         Agregar/Eliminar del carrito
                    </button><button type="button" class="btn btn-primary" style="margin-bottom: 1em; font-size: 0.8em; width: 100%" id="<?php echo $item[0];?>" onclick="btnFavorito(this)">
                        <img src="public/img/my_fav_star.svg" width="20" height="20">
                         Favorito
                    </button>
                    <span id="respuesta"></span>
                </div>
                <div class="col">
                    <span>Descripci&oacute;n: <?php echo $item[4]; ?></span>
                </div>
            </div>
        </div>
    </div>

<?php
    }
?>