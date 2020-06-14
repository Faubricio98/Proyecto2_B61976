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
    <script type="text/javascript" src="public/js/ventasScript.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" 
            crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" 
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" 
            crossorigin="anonymous"></script>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
            <a class="form-inline">
                <img src="public/img/my_icon.svg" style="margin-left: 50px;" width="70" height="80">
            </a>
            <div class="container d-flex flex-column flex-md-row justify-content-between">
                <span class="text-white py-4" id="myUserCliente" style="margin-top: 1em; width: 25%;">
                    Bienvenido
                    <?php
                        echo $_GET['user'];
                    ?>
                </span>
                <button id="btnInicio" class="btn text-white py-4" onclick="btnInicio()">Inicio</button>
                <button id="btnBuscar" class="btn text-white py-4" onclick="btnBuscar()">Buscar</button>
                <button id="btnPromocion" class="btn text-white py-4" onclick="btnPromocion()">Promociones</button>
                <button id="btnBuscar" class="btn text-white py-4" onclick="btnBuscar()">Buscar</button>
                <a class="navbar-brand" href="#">
                    <img src="public/img/my_icon.svg" width="30" height="30" class="d-inline-block align-top" alt="">
                </a>
            </div>
        </nav>
    </header>

    <div id="contenido">
        <div id="principal" class="jumbotron" style="margin-top: 0.2em;">