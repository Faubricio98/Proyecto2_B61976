<?php
    foreach ($vars['fav'] as $item) {
?>
    <img src="public/img/<?php echo $item[5]; ?>" class="card-img-top" height="200" width="200">
    <h2 class="card-title pricing-card-title">$<?php echo $item[2]; ?><small class="text-muted">/unidad</small></h1>
    <ul class="list-unstyled mt-3 mb-4">
        <li><?php echo $item[1]; ?></li>
        <li>Categor&iacute;a: <?php echo $item[3]; ?></li>
        <li>Descripci&oacute;n: <?php echo $item[4]; ?></li>
    </ul>
<?php
    }
?>