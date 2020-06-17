<?php

class VentasModel{
    protected $db;

    public function __construct() {
        require 'libs/SPDO.php';
        $this->db= SPDO::singleton();
    } // constructor

    public function getUsuario($user){
        $consulta= $this->db->prepare("call sp_get_user_client('".$user."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function traerPrimerFavorito(){
        $consulta= $this->db->prepare("call sp_get_first_fav()");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function traerSegundoFavorito(){
        $consulta= $this->db->prepare("call sp_get_second_fav()");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function traerTercerFavorito($cant){
        $consulta= $this->db->prepare("call sp_get_third_fav(".$cant.")");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function traerArticulo($cod){
        $consulta= $this->db->prepare("call sp_ver_prod_by_cod('".$cod."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function buscarFavoritoCliente($user, $cod){
        $consulta= $this->db->prepare("call sp_get_cliente_favorito('".$user."', '".$cod."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function buscarFavorito($cod){
        $consulta= $this->db->prepare("call sp_get_favorito('".$cod."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function registrarFavoritoCliente($user, $cod){
        $consulta= $this->db->prepare("call sp_registrar_cliente_favorito('".$user."', '".$cod."')");
        $consulta->execute();
    }

    public function registrarFavorito($cod, $cant){
        $consulta= $this->db->prepare("call sp_registrar_favorito('".$cod."', '".$cant."')");
        $consulta->execute();
    }

    public function actualizarFavorito($cod){
        $consulta= $this->db->prepare("call sp_actualizar_favorito('".$cod."')");
        $consulta->execute();
    }

    public function eliminarFavoritoCliente($user, $cod){
        $consulta= $this->db->prepare("call sp_borrar_cliente_favorito('".$user."', '".$cod."')");
        $consulta->execute();
    }

    public function eliminarFavorito($cod){
        $consulta= $this->db->prepare("call sp_borrar_favorito('".$cod."')");
        $consulta->execute();
    }

    public function buscarCarritoCliente($user, $cod){
        $consulta= $this->db->prepare("call sp_get_cliente_carrito('".$user."', '".$cod."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function agregarCarritoCliente($user, $cod){
        $consulta= $this->db->prepare("call sp_registrar_cliente_carrito('".$user."', '".$cod."')");
        $consulta->execute();
    }

    public function eliminarCarritoCliente($user, $cod){
        $consulta= $this->db->prepare("call sp_borrar_cliente_carrito('".$user."', '".$cod."')");
        $consulta->execute();
    }

    public function buscarArticulo($cod){
        $consulta= $this->db->prepare("call sp_get_producto('".$cod."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function direccionCliente($user){
        $consulta= $this->db->prepare("call sp_get_direccion('".$user."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function obtenerCliente($user){
        $consulta= $this->db->prepare("call sp_get_cliente('".$user."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function pagarFactura($cod, $cant, $user){
        $consulta= $this->db->prepare("call sp_registrar_venta('".$cod."', '".date("yy-m-d")."', ".$cant.", '".$user."')");
        $consulta->execute();
    }

    public function obtenerFactura($user){
        $consulta= $this->db->prepare("call sp_get_cod_factura('".$user."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }
}

?>