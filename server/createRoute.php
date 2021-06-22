<?php


include 'conexion.php';

error_reporting(0);

$id = $_POST["id"];
$nombre = $_POST["nombre"];
if($_POST["idRoute"]){
    $idRoute = $_POST["idRoute"];
}



if($idRoute){
    $sql = "INSERT INTO rutas (id, nombre, idRutaPadre) values ($id, '$nombre', $idRoute)";
}else{
    $sql = "INSERT INTO rutas (id, nombre) values ($id, '$nombre')";
}


$resultado = sqlsrv_query($con, $sql);

if($resultado){
    echo json_encode("ok");
}else{
    echo json_encode("error al guardar ruta");
}
sqlsrv_close($con);



?>