<div class="row">
    <?php
        foreach ($vars['articulo'] as $item) {    
    ?>

    <div class="col" style="border: 2px solid gray; border-radius: 5px; margin-left: 1em;">
        <script>getCliente()</script>
        <legend class="text-center">Información del usuario</legend>
        <span id="infoCliente"></span>
        <div class="row">
            <div class="col">
                <input id="numCard" class="form-control" type="text" placeholder="Número de tarjeta" style="margin-bottom: 1em;">
            </div>
            <div class="col">
                <input id="numSecCard" class="form-control" type="text" placeholder="Código de seguridad">
            </div>
        </div>
    </div>

    <div class="col" style="border: 2px solid gray; border-radius: 5px; margin-left: 1em;">
        <legend class="text-center">Informaci&oacute;n del art&iacute;culo</legend>
        <div class="row">
            <div class="col">
                <span>Nombre: <?php echo $item[1] ?> </span> <br>
                <span>C&oacute;digo: <?php echo $item[0] ?> </span> <br>
                <span>Precio: $<?php echo $item[2] ?>/unidad </span> <br>
                <span id="colones"></span> <br>
                <script>calculaCambio(<?php echo $item[2]; ?>)</script>
                <script>optionsCantidad()</script>
                <span>Categor&iacute;a: <?php echo $item[3] ?> </span> <br>
            </div>
            <div class="col">
                <span>Env&iacute;o Gratis</span>
                <legend style="color: green;">Disponible</legend>
                <select class="custom-select text-white" name="cantidad" id="cantidad" style="margin-top: 0.5em; margin-bottom: 0.5em; background-color: rgb(0, 123, 255);"></select>
            </div>
        </div>
        <button type="button" class="btn btn-primary text-center" style="width: 100%; margin-bottom: 0.5em;" id="<?php echo $item[0];?>" onclick="btnPagar(this)">Pagar</button>
        <span id="spanPago"></span>
    </div>

    <?php
        }
    ?>
</div>