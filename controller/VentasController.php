<?php

class VentasController{

    public function __construct() {
        $this->view = new View();
    } // constructor

    public function mostrar(){
        $this->view->show("ventasView.php", null);
    }

    public function getUsuarioCliente(){
        require 'model/VentasModel.php';
        $cliente = new VentasModel();
        $data=$cliente->getUsuario($_POST['user']);
        foreach ($data as $item) {
            echo $item[0];
        }
    }

    public function mostrarPrimerFavoritoVentas(){
        require 'model/VentasModel.php';
        $producto = new VentasModel();
        $data=$producto->traerPrimerFavorito();
        $cod = '';
        foreach ($data as $item) {
            $cod = $item[0];
        }
        
        $art['fav'] = $producto->traerArticulo($cod);
        $this->view->show("mostrarFavoritos.php", $art);
    }

    public function mostrarSegundoFavoritoVentas(){
        require 'model/VentasModel.php';
        $producto = new VentasModel();
        $data=$producto->traerSegundoFavorito();
        $cod = '';
        foreach ($data as $item) {
            $cod = $item[0];
        }
        
        $art['fav'] = $producto->traerArticulo($cod);
        $this->view->show("mostrarFavoritos.php", $art);
    }

    public function mostrarTercerFavoritoVentas(){
        require 'model/VentasModel.php';
        $producto = new VentasModel();
        $data=$producto->traerSegundoFavorito();
        $cant = '';
        foreach ($data as $item) {
            $cant = $item[1];
        }

        $data=$producto->traerTercerFavorito($cant);
        $cod = '';
        foreach ($data as $item) {
            $cod = $item[0];
        }
        
        $art['fav'] = $producto->traerArticulo($cod);
        $this->view->show("mostrarFavoritos.php", $art);
    }

    public function guardarFavoritoVentas(){
        require 'model/VentasModel.php';
        $favorito = new VentasModel();
        //buscamos si el cliente ya tenía el artículo como favorito
        $data = $favorito->buscarFavoritoCliente($_POST['user'], $_POST['cod']);

        $cant = '';
        foreach ($data as $item) {
            $cant = $item[0];
        }

        //si no lo tiene, se agrega
        if($cant == 0){
            //no existe como favorito, debe de guardarse
            $favorito->registrarFavoritoCliente($_POST['user'], $_POST['cod']);
            //buscamos si ya existía en la tabla de favoritos
            $data = $favorito->buscarFavorito($_POST['cod']);
            $cant = '';
            foreach ($data as $item) {
                $cant = $item[0];
            }

            //si no estaba, se agrega
            if($cant == 0){
                $favorito->registrarFavorito($_POST['cod'], 1);
            }
            //si ya existe, solo se actualiza el registro
            if($cant == 1){
                $favorito->actualizarFavorito($_POST['cod']);
            }
            echo 'Registrado';
        }else{
            //si ya existía como favorito, se retira
            if($cant == 1){
                //eliminamos el artículo y al cliente 
                $favorito->eliminarFavoritoCliente($_POST['user'], $_POST['cod']);

                //se debe de eliminar uno en la tabla de favoritos
                $favorito->eliminarFavorito($_POST['cod']);

                echo 'Eliminado';
            }
        }
    }

}

?>