<legend class="text-center">Estas son las compras registradas</legend>
<table class="table">
    <thead>
        <tr>
            <th># Venta</th>
            <th>Producto</th>
            <th>Fecha de venta</th>
            <th>Cantidad</th>
            <th>Precio c/u</th>
            <th>Pagado</th>
        </tr>
    </thead>

    <tbody>
        <?php
            foreach($vars['ventas'] as $item){
        ?>
        <tr>
            <td><?php echo $item[0]; ?></td>
            <td><?php echo $item[1]; ?></td>
            <td><?php echo $item[2]; ?></td>
            <td><?php echo $item[3]; ?></td>
            <td>$<?php echo $item[4]; ?></td>
            <td>$<?php echo $item[5]; ?></td>
        </tr>
        <?php 
            }
        ?>
    </tbody>
</table>