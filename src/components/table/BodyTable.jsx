import React from "react";
import { Tbody, Tr, Td } from "@chakra-ui/react";

const BodyTable = ({ id, nombre, idRutaPadre, children }) => {
  return (
    <Tbody>
      <Tr>
        <Td isNumeric>{id}</Td>
        <Td>{nombre}</Td>
        <Td isNumeric>{idRutaPadre}</Td>
        <Td>{children}</Td>
      </Tr>
    </Tbody>
  );
};

export default BodyTable;
