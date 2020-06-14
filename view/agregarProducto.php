<legend class="text-center">Agregar un nuevo producto</legend>

<input id="codProd" class="form-control" type="text" placeholder="Código del producto">
<input id="nameProd" class="form-control" type="text" placeholder="Nombre del producto">
<input id="priceProd" class="form-control" type="text" placeholder="Precio (Dólares)">
<input id="catProd" class="form-control" type="text" placeholder="Categoría">
<textarea class="form-control" name="tx_a" id="descProd" type="text" placeholder="Descripción del producto"></textarea>
<div class="custom-file" style="margin-top: 1em;">
    <input class="custom-file-input" type="file" id="uploadedFile" name="uploadedFile"/>
    <label class="custom-file-label" for="customFile">Seleccione una imagen</label>
</div>

<button id="btnCreate" class="btn btn-primary" onclick="crearProd($('#codProd').val(), $('#nameProd').val(), $('#priceProd').val(),$('#catProd').val(),$('#descProd').val())">Agregar nuevo producto</button>
<span id="resultado"></span>