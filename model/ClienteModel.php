<?php

class ClienteModel{

    protected $db;

    public function __construct() {
        require 'libs/SPDO.php';
        $this->db= SPDO::singleton();
    } // constructor

    public function confirmarUsuario($user){
        $consulta= $this->db->prepare("call sp_check_user_client('".$user."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function crearUsuario($user, $pass, $email){
        $consulta= $this->db->prepare("call sp_registrar_usuario('".$user."', '".$pass."', '".$email."')");
        $consulta->execute();
    }

    public function crearCliente($user, $name, $apel, $edad, $gen, $prov, $cant, $dist, $dir){
        $consulta= $this->db->prepare("call sp_registrar_cliente(
            '".$user."', '".$name."', '".$apel."', '".$edad."', '".$gen."', ".$prov.", '".$cant."', '".$dist."', '".$dir."')");
        $consulta->execute();
    }

    public function log($user, $pass){
        $consulta= $this->db->prepare("call sp_login_cliente('".$user."', '".$pass."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }
    
}

?>