<?php
    foreach ($vars['fav'] as $item) {
?>

    <img src="public/img/<?php echo $item[5]; ?>" class="card-img-top" height="250" width="200">
    <h2 class="card-title pricing-card-title">$<?php echo $item[2]; ?><small class="text-muted">/unidad</small></h1>
    <ul class="list-unstyled mt-3 mb-4">
        <li><?php echo $item[1]; ?></li>
        <li>Categor&iacute;a: <?php echo $item[3]; ?></li>
        <li>Descripci&oacute;n: <?php echo $item[4]; ?></li>
    </ul>

    <div class="row">
        <div class="col">
            <button type="button" class="btn btn-primary" id="<?php echo $item[0];?>" onclick="btnComprar(this)">Comprar</button>
        </div>
        <div class="col">
            <button type="button" class="btn btn-primary" style="margin-left: 1.5em;" id="<?php echo $item[0];?>" onclick="btnCarrito(this)">
                <img src="public/img/my_cart.svg" width="25" height="25">
            </button>
        </div>
        <div class="col">
            <button type="button" class="btn btn-primary" id="<?php echo $item[0];?>" onclick="btnFavorito(this)">
                <img src="public/img/my_fav_star.svg" width="25" height="25">
            </button>
        </div>
    </div>


<?php
    }
?>