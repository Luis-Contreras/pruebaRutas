<?php


include 'conexion.php';

error_reporting(0);


$sql = "SELECT [id],[nombre],[idRutaPadre] FROM [prueba].[dbo].[rutas]";

$resultado = sqlsrv_query($con, $sql);

if($resultado){

    $count = 0;

    while ( $temp = sqlsrv_fetch_object($resultado)){
        $rutas[$count]["id"] = htmlentities($temp->id);
        $rutas[$count]["nombre"] = htmlentities($temp->nombre);
        $rutas[$count]["idRutaPadre"] = htmlentities($temp->idRutaPadre);
        $count = $count + 1;
    }

    if($rutas){
        echo json_encode($rutas);
    }else{
        echo json_encode("error al mostrar rutas");
    }
    
}

sqlsrv_close($con);



?>