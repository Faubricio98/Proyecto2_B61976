<!DOCTYPE html>
<html lang="es">

<head>
    <title>Don Limpio</title>
	<meta charset="utf-8"/>
	<meta name="description" content="Limpieza" />
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <link rel="icon" href="public/img/my_icon.svg">
    <link href="public/css/estilos.css" rel="stylesheet">
    <script type="text/javascript" src="public/js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="public/js/script.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" 
            crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" 
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" 
            crossorigin="anonymous"></script>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white text-center">
            <a class="py-3" href="#" aria-label="Product">
                <img src="public/img/my_icon.svg" style="margin-left: 50px;" width="50" height="40">
            </a>
            <div class="container d-flex flex-column flex-md-row justify-content-between">
                <button id="createUser" class="btn text-white py-4" onclick="btnCrearUsuario()">Crear usuarios</button>
                <button id="createProd" class="btn text-white py-4" onclick="btnCrearProducto()">Productos</button>
                <button id="createCatg" class="btn text-white py-4" onclick="btnCrearCategoria()">Categor&iacute;as</button>
                <button id="createProm" class="btn text-white py-4" onclick="btnCrearPromocion()">Promociones</button>
                <button id="createProm" class="btn text-white py-4" onclick="btnVerVetas()">Ventas</button>
                <button id="createUser" class="btn text-white py-4" onclick="btnCerrarSesion()">Cerrar sesi&oacute;n</button>
            </div>
        </nav>
    </header>

    <div id="contenido">
        <div id="principal" class="jumbotron" style="margin-top: 0.5em;">