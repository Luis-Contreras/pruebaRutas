<?php


include 'conexion.php';

error_reporting(0);

$id = $_POST["id"];
$nombre = $_POST["nombre"];
$idRoute = $_POST["idRoute"];



$sql = "UPDATE [prueba].[dbo].[rutas] SET nombre = '$nombre', idRutaPadre = '$idRoute' WHERE id = $id";

$resultado = sqlsrv_query($con, $sql);

if($resultado){
    echo json_encode("ok");
}else{
    echo json_encode("error al guardar ruta");
}
sqlsrv_close($con);



?>