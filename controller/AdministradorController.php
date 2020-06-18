<?php

class AdministradorController{

    public function __construct() {
        $this->view = new View();
    } // constructor

    public function mostrar(){
        $this->view->show("administradorView.php", null);
    } // listar

    public function logInAdministrador(){
        //debo llamar al model
        require 'model/AdministradorModel.php';
        $admin = new AdministradorModel();
        $data=$admin->logear($_POST['user'], $_POST['pass']);
        foreach ($data as $item) {
            echo $item[0];
        }
    }

    public function signInAdministrador(){
        require 'model/AdministradorModel.php';
        $admin = new AdministradorModel();
        $admin->signIn($_POST['user'], $_POST['pass']);
        echo 'Administrador creado correctamente';
    }

    public function newProdAdministrador(){
        $this->view->show("agregarProducto.php", null);
    }

    public function registrarProductoAdministrador(){
        //if (isset($_POST['uploadBtn']) && $_POST['uploadBtn'] == 'Upload'){
            if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK){
                // get details of the uploaded file
                $fileTmpPath = $_FILES['file']['tmp_name'];
                $fileName = $_FILES['file']['name'];
                $fileSize = $_FILES['file']['size'];
                $fileType = $_FILES['file']['type'];
                $fileNameCmps = explode(".", $fileName);
                $fileExtension = strtolower(end($fileNameCmps));

                // check if file has one of the following extensions
                $allowedfileExtensions = array('jpg', 'jpeg', 'png');
        
                if (in_array($fileExtension, $allowedfileExtensions)){
                    // directory in which the uploaded file will be moved
                    $uploadFileDir = '/Proyecto2_B61976/public/img/';
                    $dest_path = $_SERVER['DOCUMENT_ROOT'].$uploadFileDir . $fileName;
                    if(move_uploaded_file($fileTmpPath, $dest_path)){
                        echo 'Imagen '.$fileName. ' cargada correctamente <br>';
                        require 'model/AdministradorModel.php';
                        $prod = new AdministradorModel();
                        $prod->registrarProducto($_POST['cod'], $_POST['name'], $_POST['price'], $_POST['category'], $_POST['desc'], $_POST['img']);
                        echo 'Producto guardado correctamente';
                    }else {
                        echo 'Ha habido un problema al cargar la imagen. Reinténtelo más tarde.';
                    }
                }else{
                    $message = 'Carga fallida. Solo se permiten archivos de tipo: ' . implode(',', $allowedfileExtensions);
                }
            }else{
                echo 'Ha habido un error en el archivo.'.'Error: '.$_FILES['file']['error'];
            }
        //}
    }

    public function registrarCategoriaAdministrador(){
        require 'model/AdministradorModel.php';
        $cat = new AdministradorModel();
        $cat->registrarCategoria($_POST['cod'], $_POST['name']);
        echo 'Categoría guardada correctamente';
    }

    public function registrarPromocionAdministrador(){
        require 'model/AdministradorModel.php';
        $prom = new AdministradorModel();
        $prom->registrarPromocion($_POST['cod'], $_POST['desc'], $_POST['dateS'], $_POST['dateE']);
        echo 'Promocion guardada correctamente';
    }

    public function registrarPromProdAdministrador(){
        require 'model/AdministradorModel.php';
        $prom = new AdministradorModel();
        $data=$prom->obtenerPrecio($_POST['prod']);
        $precio_r = '';
        foreach ($data as $item) {
            $precio_r = $item[0];
        }
        $precio_d = $precio_r - ($precio_r * ($_POST['desc']/100));
        $prom->registrarPromProd($_POST['cod'], $_POST['prod'], $precio_r, $_POST['desc'], $precio_d);
    }

    public function verProductosAdministrador(){
        //debo llamar al model
        require 'model/AdministradorModel.php';
        $ver = new AdministradorModel();
        $data['myList']=$ver->verProductos();
        $this->view->show("verTablaProducto.php", $data);
    }

    public function verVentasFechasAdministrador(){
        require 'model/AdministradorModel.php';
        $ver = new AdministradorModel();
        $data['ventas']=$ver->verVentasFechas($_POST['ds'], $_POST['de']);
        $this->view->show("verTablaVentas.php", $data);
    }

    public function verVentasMesAnnoAdministrador(){
        require 'model/AdministradorModel.php';
        $ver = new AdministradorModel();
        $data['ventas']=$ver->verVentasMesAnno($_POST['mes'], $_POST['year']);
        $this->view->show("verTablaVentas.php", $data);
    }
}

?>