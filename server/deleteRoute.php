<?php

include 'conexion.php';

error_reporting(0);


$idRoute = $_POST["idRoute"];


$sql = "DELETE FROM [prueba].[dbo].[rutas] WHERE [id] = $idRoute";

$resultado = sqlsrv_query($con, $sql);

if($resultado){
    echo json_encode($idRoute);
}else{
    echo json_encode("error al eliminar la ruta");
}


sqlsrv_close($con);



?>