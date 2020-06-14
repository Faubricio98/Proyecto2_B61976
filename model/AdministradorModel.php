<?php

class AdministradorModel{

    protected $db;

    public function __construct() {
        require 'libs/SPDO.php';
        $this->db= SPDO::singleton();
    } // constructor

    public function logear($user, $pass){
        //aca debo llamar al store procedure
        $consulta= $this->db->prepare("call sp_check_log('".$user."', '".$pass."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function signIn($user, $pass){
        $consulta= $this->db->prepare("call sp_new_admin('".$user."', '".$pass."')");
        $consulta->execute();
    }

    public function registrarProducto($cod, $name, $price, $ctg, $desc, $img){
        $consulta= $this->db->prepare("call sp_registrar_producto('".$cod."', '".$name."', '".$price."', '".$ctg."', '".$desc."', '".$img."')");
        $consulta->execute();
    }

    public function registrarCategoria($cod, $name){
        $consulta= $this->db->prepare("call sp_registrar_categoria('".$cod."', '".$name."')");
        $consulta->execute();
    }

    public function registrarPromocion($cod, $desc, $dateS, $dateE){
        $consulta= $this->db->prepare(
            "call sp_registrar_promocion('".$cod."', '".$desc."', '".$dateS."', '".$dateE."')");
        $consulta->execute();
    }

    public function obtenerPrecio($cod){
        $consulta= $this->db->prepare("call sp_obtener_precio('".$cod."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function registrarPromProd($cod, $prod, $p_r, $desc, $p_d){
        $consulta= $this->db->prepare(
            "call sp_prom_prod('".$cod."', '".$prod."', '".$p_r."', '".$desc."', '".$p_d."')");
        $consulta->execute();
    }

    public function verProductos(){
        $consulta= $this->db->prepare("call sp_ver_prod()");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

}

?>