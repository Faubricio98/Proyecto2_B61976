<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-4">
        <legend class="text-center">Administrador</legend>
        <input id="userAdmin" class="form-control" type="text" placeholder="Nombre de usuario">
        <input id="passAdmin" class="form-control" type="password" placeholder="Contraseña">
        <button id="logInAdm" onclick="logAdm($('#userAdmin').val(), $('#passAdmin').val())" class="btn btn-primary">Log In</button>
        <span id="resultadoA"></span>
    </div>
    <div class="col-md-2"></div>
    <div class="col-md-4">
        <legend class="text-center">Cliente</legend>
        <input id="userClient" class="form-control" type="text" placeholder="Nombre de usuario o correo">
        <input id="passClient" class="form-control" type="password" placeholder="Contraseña">
        <button id="logInClient" onclick="logInCliente($('#userClient').val(), $('#passClient').val())" class="btn btn-primary">Log In</button>
        <button id="signInClient" onclick="signInCliente()" class="btn btn-primary">Sign In</button>
        <span id="resultadoC"></span>
    </div>
    <div class="col-md-1"></div>
</div>