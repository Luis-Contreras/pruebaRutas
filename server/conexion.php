<?php

    header("Content-Type: text/html;charset=utf-8");
    include "headers.php";

    /*Desarrollo*/

    $serverName = "DESKTOP-131UKGV";
    $dataBase = "prueba";
    $UID = "superMerkAppUser";
    $PWD = "fjrQwzRUBCEZWqexTkwr2us5r5tJUBe2";

    $connectionInfo = array("Database"=>$dataBase,"CharacterSet"=>"UTF-8");
    
    $con = sqlsrv_connect($serverName,$connectionInfo);

    if(!$con){
        echo "Conexión no se pudo establecer.<br />";
        die( print_r( sqlsrv_errors(), true));
    }



?>