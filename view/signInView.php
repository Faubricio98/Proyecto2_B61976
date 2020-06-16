<?php
    include_once 'public/indexHeader.php';
?>

<div class="row">
<!--modal para invitar a amigos-->
<div class="modal fade" id="modInvita" tabindex="-1" role="dialog" aria-labelledby="modInvitaLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modInvitaLabel"> <img src="public/img/my_icon.svg" style="margin-left: 50px;" width="50" height="60"> Don Limpio dice:</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
            <div class="modal-body table-responsive">
                <span id="resultadoSignIn"></span>
			</div>
			<div class="modal-footer">
				<button id="btnCloseMod" type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
			</div>
		</div>
	</div>
</div>
<!--modal para invitar a amigos-->
    <div class="col-sm"></div>
    <div class="col-sm-6">
        <legend class="text-center">Reg&iacute;strese para ser un nuevo usuario Don Limpio</legend>
        <input id="nameU" class="form-control" type="text" placeholder="Nombre">
        <input id="apelUser" class="form-control" type="text" placeholder="Apellidos">
        <input id="ageUser" class="form-control" type="number" placeholder="Edad">
        <select class="custom-select" name="myGenre" id="myGenre" style="margin-top: 1em;">
            <option value="0" selected>Seleccione su g&eacute;nero</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
        </select>
        <div class="row">
            <div class="col">
                <select class="custom-select" name="provincia" id="provincia" style="margin-top: 1em;">
                    <option value="0" selected>Provincia</option>
                    <option value="1">San Jos&eacute;</option>
                    <option value="2">Alajuela</option>
                    <option value="3">Cartago</option>
                    <option value="4">Heredia</option>
                    <option value="5">Guanacaste</option>
                    <option value="6">Puntarenas</option>
                    <option value="7">Lim&oacute;n</option>
                </select>
            </div>
            <div class="col">
                <input id="cantonUser" class="form-control" type="text" placeholder="Cantón">
            </div>
            <div class="col">
                <input id="distritoUser" class="form-control" type="text" placeholder="Distrito">
            </div>
            <div class="col">
                <input id="postal_code" class="form-control" type="text" placeholder="Código Postal">
            </div>
        </div>
        <input id="addressUser" class="form-control" type="text" placeholder="Dirección">
        <input id="userName" class="form-control" type="text" placeholder="Nombre de usuario">
        <input id="emailUser" class="form-control" type="text" placeholder="Correo electrónico">
        <input id="passUser" class="form-control" type="password" placeholder="Contraseña">
        <input id="conPassUser" class="form-control" type="password" placeholder="Confirme su contraseña">
        <span id="confirmaPass"></span>
        <button id="signInUser" data-toggle="modal" data-target="#modInvita" onclick="btnCrearCliente(
            $('#nameU').val(),
            $('#apelUser').val(),
            $('#ageUser').val(),
            $('#cantonUser').val(),
            $('#distritoUser').val(),
            $('#addressUser').val(),
            $('#userName').val(),
            $('#emailUser').val(),
            $('#passUser').val(), 
            $('#conPassUser').val())" class="btn btn-primary" type="button">Registrarse</button>
        <span id="resultadoA"></span>
    </div>
    <div class="col-sm"></div>
</div>

<?php
    include_once 'public/footer.php';
?>