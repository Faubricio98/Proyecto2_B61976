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

    public function obtenerNombreProvincia($number){
        $consulta= $this->db->prepare("call sp_get_provincia(".$number.")");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->closeCursor();
        return $resultado;
    }

    public function generarCodigoPostal($dist, $cant, $prov){
        $address = $dist.", ".$cant.", ".$prov.", Costa Rica";
        if(!empty($address)){
            //Formatted address
            $formattedAddr = str_replace(' ','+',$address);
            //Send request and receive json data by address
            $geocodeFromAddr = file_get_contents('http://maps.googleapis.com/maps/api/geocode/json?address='.$formattedAddr.'&sensor=true_or_false&key=GoogleAPIKey'); 
            $output1 = json_decode($geocodeFromAddr);
            //Get latitude and longitute from json data
            $latitude  = $output1->results[0]->geometry->location->lat; 
            $longitude = $output1->results[0]->geometry->location->lng;
            //Send request and receive json data by latitude longitute
            $geocodeFromLatlon = file_get_contents('http://maps.googleapis.com/maps/api/geocode/json?latlng='.$latitude.','.$longitude.'&sensor=true_or_false');
            $output2 = json_decode($geocodeFromLatlon);
            if(!empty($output2)){
                $addressComponents = $output2->results[0]->address_components;
                foreach($addressComponents as $addrComp){
                    if($addrComp->types[0] == 'postal_code'){
                        //Return the zipcode
                        return $addrComp->long_name;
                    }
                }
                return false;
            }else{
                return false;
            }
        }else{
            return false;   
        }

    }
}

?>