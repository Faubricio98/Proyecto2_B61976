<?php

class ClienteController{

    public function __construct() {
        $this->view = new View();
    } // constructor

    public function mostrarSignIn(){
        $this->view->show("signInView.php", null);
    }

    public function signInCliente(){
        //debo llamar al model
        require 'model/ClienteModel.php';
        $cliente = new ClienteModel();
        $data=$cliente->confirmarUsuario($_POST['user']);
        $ans = -1;
        foreach ($data as $item) {
            $ans = $item[0];
        }

        if($ans == 0){
            //aun no existe
            $cliente->crearUsuario($_POST['user'], $_POST['pass'], $_POST['email']);
            $cliente->crearCliente(
                $_POST['user'], 
                $_POST['nombre'], 
                $_POST['apel'],
                $_POST['edad'], 
                $_POST['gen'], 
                $_POST['prov'],
                $_POST['canton'], 
                $_POST['dist'], 
                $_POST['address']
            );
            echo 1;
        }else{
            //ya existe
            if($ans >= 1){
                echo 0;
            }
        };
    }

    public function logCliente(){
        //debo llamar al model
        require 'model/ClienteModel.php';
        $cliente = new ClienteModel();
        $data=$cliente->log($_POST['user'], $_POST['pass']);
        foreach ($data as $item) {
            echo $item[0];
        }
    }

}

?>