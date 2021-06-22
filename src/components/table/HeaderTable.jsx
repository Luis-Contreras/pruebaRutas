import { Table, Thead, Tr, Th, TableCaption } from "@chakra-ui/react";

const HeaderTable = ({ children }) => {
  return (
    <Table variant="simple" w="70%" colorScheme="facebook">
      <TableCaption>Todas las rutas</TableCaption>
      <Thead>
        <Tr>
          <Th isNumeric>Id ruta</Th>
          <Th>nombre</Th>
          <Th isNumeric>ruta Padre</Th>
          <Th>Acciones</Th>
        </Tr>
      </Thead>
      {children}
    </Table>
  );
};

export default HeaderTable;
