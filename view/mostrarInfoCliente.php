<?php
    foreach ($vars['cliente'] as $item) {
?>
    <span>Nombre: <?php echo $item[1]; echo ' '.$item[2]; ?></span> <br>
    <span>Provincia: <?php echo $item[4]; ?></span> <br>
    <span>Cant&oacute;n: <?php echo $item[5]; ?></span> <br>
    <span>Distrito: <?php echo $item[6]; ?></span> <br>
    <span>Direcci&oacute;n: <?php echo $item[7]; ?></span>

<?php
    }
?>