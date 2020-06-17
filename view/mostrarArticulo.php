<div class="row">
    <?php
        foreach ($vars['articulo'] as $item) {
    ?>
        <div class="col" id="divImagen">
            <img src="public/img/<?php echo $item[5]; ?>" class="card-img-top" height="250" width="200">
        </div>

        <div class="col" id="infoArticulo" style="border: 2px solid gray; border-radius: 5px;">
            <h1 class="text-center"><?php echo $item[1]; ?></h1>
            <label>Precio: <h3>$<?php echo $item[2]; ?></h3> </label> <br>
            <label>C&oacute;digo: <?php echo $item[0]; ?></label> <br>
            <label>Categor&iacute;a: <?php echo $item[3]; ?></label> <br>
            <label>Descripci&oacute;n: <?php echo $item[4]; ?></label>
        </div>

        <div class="col-md-2" id="divOpcionesCompra" style="border: 2px solid gray; border-radius: 5px; margin-left: 1em;">
            <h3>$<?php echo $item[2]; ?></h3>
            <span>Env&iacute;o Gratis</span>
            <legend style="color: green;">Disponible</legend>
            <!--<script>optionsCantidad()</script>-->
            <!--<select class="custom-select text-white" name="cantidad" id="cantidad" style="margin-top: 1em; margin-bottom: 1em; background-color: rgb(0, 123, 255);"></select>-->
            <button type="button" class="btn btn-primary text-center" style="font-size: 0.7em; width: 100%" id="<?php echo $item[0];?>" onclick="btnCarrito(this)">
                <img src="public/img/my_cart.svg" width="20" height="20">
                Agregar al carrito
            </button>
            <button type="button" class="btn btn-primary text-center" style="margin-bottom: 1em; margin-top: 1em; font-size: 0.8em; width: 100%" id="<?php echo $item[0];?>" onclick="btnCompra(this)">
                <img src="public/img/my_buy.svg" width="20" height="20">
                Comprar ahora
            </button>
            <span style="margin-top: 2em;">
                <script>getAddress()</script>
                <img src="public/img/my_shipment.svg" width="30" height="30">
                <span id="spanEnvio" style="font-size: 0.7em;"></span>
            </span>
        </div>
    <?php
        }
    ?>
</div>