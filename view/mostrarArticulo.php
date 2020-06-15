<div class="row">
    <?php
        foreach ($vars['articulo'] as $item) {
    ?>
        <div class="col">
            <img src="public/img/<?php echo $item[5]; ?>" class="card-img-top" height="250" width="200">
        </div>

        <div class="col">
            <h1 class="text-center"><?php echo $item[1]; ?></h1>
            <legend>Precio: <h2>$<?php echo $item[2]; ?></h2></legend>
            <label>C&oacute;digo: <?php echo $item[0]; ?></label> <br>
            <label>Categor&iacute;a: <?php echo $item[3]; ?></label> <br>
            <label>Descripci&oacute;n: <?php echo $item[4]; ?></label>
        </div>

        <div class="col">
        </div>
    <?php
        }
    ?>
</div>