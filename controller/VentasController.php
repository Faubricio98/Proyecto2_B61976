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

    public function mostrarPrimerFavoritoInicioVentas(){
        require 'model/VentasModel.php';
        $producto = new VentasModel();
        $data=$producto->traerPrimerFavorito();
        $cod = '';
        foreach ($data as $item) {
            $cod = $item[0];
        }
        
        $art['fav'] = $producto->traerArticulo($cod);
        $this->view->show("mostrarFavoritosInicio.php", $art);
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

    public function mostrarSegundoFavoritoInicioVentas(){
        require 'model/VentasModel.php';
        $producto = new VentasModel();
        $data=$producto->traerSegundoFavorito();
        $cod = '';
        foreach ($data as $item) {
            $cod = $item[0];
        }
        
        $art['fav'] = $producto->traerArticulo($cod);
        $this->view->show("mostrarFavoritosInicio.php", $art);
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

    public function mostrarTercerFavoritoInicioVentas(){
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
        $this->view->show("mostrarFavoritosInicio.php", $art);
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
            echo 'Registrado como favorito';
        }else{
            //si ya existía como favorito, se retira
            if($cant == 1){
                //eliminamos el artículo y al cliente 
                $favorito->eliminarFavoritoCliente($_POST['user'], $_POST['cod']);

                //se debe de eliminar uno en la tabla de favoritos
                $favorito->eliminarFavorito($_POST['cod']);

                echo 'Eliminado de favoritos';
            }
        }
    }

    public function guardarCarritoVentas(){
        require 'model/VentasModel.php';
        $carrito = new VentasModel();
        //buscamos si el cliente tiene el articulo en el carrito
        $data = $carrito->buscarCarritoCliente($_POST['user'], $_POST['cod']);
        $cant = '';
        foreach ($data as $item) {
            $cant = $item[0];
        }

        //si no estaba en el carrito, debemos agregarlo
        if($cant == 0){
            $carrito->agregarCarritoCliente($_POST['user'], $_POST['cod']);
            echo 'Agregado al carrito';
        }else{
            if($cant == 1){
                $carrito->eliminarCarritoCliente($_POST['user'], $_POST['cod']);
                echo 'Eliminado del carrito';
            }
        }
    }

    public function mostrarArticuloVentas(){
        require 'model/VentasModel.php';
        $producto = new VentasModel();
        $data['articulo'] = $producto->buscarArticulo($_POST['cod']);

        $this->view->show("mostrarArticulo.php", $data);
    }

    public function direccionClienteVentas(){
        require 'model/VentasModel.php';
        $direccion = new VentasModel();
        //buscamos si el cliente tiene el articulo en el carrito
        $data = $direccion->direccionCliente($_POST['user']);
        foreach ($data as $item) {
            echo $item[2].', '.$item[0];
        }        
    }

    public function mostrarInfoCompraVentas(){
        require 'model/VentasModel.php';
        $producto = new VentasModel();
        $data['articulo'] = $producto->buscarArticulo($_POST['cod']);
        $this->view->show("mostrarInfoCompra.php", $data);
    }

    public function verInfoClienteVentas(){
        require 'model/VentasModel.php';
        $cliente = new VentasModel();
        $data['cliente'] = $cliente->obtenerCliente($_POST['user']);
        $this->view->show("mostrarInfoCliente.php", $data);
    }

    public function mostrarFacturaVentas(){
        $this->view->show("compraView.php", null);
    }

    public function pagarFacturaVentas(){
        require 'model/VentasModel.php';
        $cliente = new VentasModel();
        $cliente->pagarFactura($_POST['cod'], $_POST['cant'], $_POST['user']);
        echo 'Pagado';
    }

    public function obtenerFacturaVentas(){
        require 'model/VentasModel.php';
        $factura = new VentasModel();
        $data = $factura->obtenerFactura($_POST['user']);
        foreach ($data as $item) {
            echo $item[0];
        }
    }

    public function verProductoCompraVentas(){
        require 'model/VentasModel.php';
        $producto = new VentasModel();
        $data['articulo'] = $producto->buscarArticulo($_POST['cod']);

        foreach ($data['articulo'] as $item) {
            echo 'Nombre: '.$item[1];
        }
        //$this->view->show("mostrarCompra.php", $data);
    }

    public function verPrecioCompraVentas(){
        require 'model/VentasModel.php';
        $producto = new VentasModel();
        $data['articulo'] = $producto->buscarArticulo($_POST['cod']);

        foreach ($data['articulo'] as $item) {
            echo $item[2];
        }
    }

    public function obtenerClienteCarritoVentas(){
        require 'model/VentasModel.php';
        $carrito = new VentasModel();
        $data['carrito'] = $carrito->obtenerClienteCarrito($_POST['user']);
        $this->view->show("mostrarCarrito.php", $data);
    }

    public function buscarArticuloPrecioVentas(){
        require 'model/VentasModel.php';
        $carrito = new VentasModel();
        $data['articulo'] = $carrito->buscarArticuloPrecio($_POST['search'], $_POST['precio']);
        $this->view->show("mostrarArticuloPrecio.php", $data);
    }

    public function mostrarHistorialVentas(){
        require 'model/VentasModel.php';
        $carrito = new VentasModel();
        $data['ventas'] = $carrito->mostrarHistorial($_POST['user']);
        $this->view->show("verTablaVentas.php", $data);
    }

    public function getTipoCambioVentas(){
        try {
            $url = "https://gee.bccr.fi.cr/Indicadores/Suscripciones/WS/wsindicadoreseconomicos.asmx?wsdl";
            $params = array(
                'Indicador' => '317',
                'FechaInicio' => date("d/m/yy"),
                'FechaFinal' => date("d/m/yy"),
                'Nombre' => 'FaubricioChavesHernandez',
                'SubNiveles' => 'N',
                'CorreoElectronico' => 'faubricio98@gmail.com',
                'Token' => '01I6DA8LO2'
            );
            $sc = new SoapClient($url);
            $res = $sc->ObtenerIndicadoresEconomicosXML($params);
            $arr = json_decode(json_encode($res), true);
            $myJS = json_encode($arr['ObtenerIndicadoresEconomicosXMLResult']);
            list($p1, $p2) = preg_split("</DES_FECHA>", $myJS);
            $a1 = preg_split("/[\s,]+/", $p2);
            $a2 = preg_split("/[\s,]+/", $a1[1]);
            //$a3 = preg_split("NUM_VALOR", $a2[0]);
            //print_r($a2);
            echo $a2[0];
            
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

}

?>