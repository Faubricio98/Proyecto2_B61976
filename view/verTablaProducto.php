<table class="table">
    <thead>
        <tr>
            <th>C&oacute;digo</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categor&iacute;a</th>
            <th>Descripci&oacute;n</th>
        </tr>
    </thead>

    <tbody>
        <?php
            foreach($vars['myList'] as $item){
        ?>
        <tr>
            <td><?php echo $item[0]; ?></td>
            <td><?php echo $item[1]; ?></td>
            <td><?php echo $item[2]; ?></td>
            <td><?php echo $item[3]; ?></td>
            <td><?php echo $item[4]; ?></td>
        </tr>
        <?php 
            }
        ?>
    </tbody>
</table>