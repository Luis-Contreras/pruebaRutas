import React from "react";
import { Stack, Flex, Heading, Input, Select } from "@chakra-ui/react";

const UpdateRoute = ({ data, handleChange, routes }) => {
  console.log(data);
  return (
    <Stack spacing={6}>
      <Flex flexDir="column">
        <Heading mb="5px" as="h5" size="sm">
          Id
        </Heading>
        <Input
          type="number"
          defaultValue={data && data.id}
          isDisabled={true}
          onChange={handleChange}
          name="id"
          placeholder="Id"
          size="md"
        />
      </Flex>

      <Flex flexDir="column">
        <Heading mb="5px" as="h5" size="sm">
          Nombre
        </Heading>
        <Input
          onChange={handleChange}
          defaultValue={data && data.nombre}
          name="nombre"
          placeholder="Nombre"
          size="md"
        />
      </Flex>

      <Flex flexDir="column">
        <Heading mb="5px" as="h5" size="sm">
          Ruta Padre
        </Heading>
        <Select
          variant="filled"
          defaultValue={data && data.idRutaPadre}
          onChange={handleChange}
          name="idRutaPadre"
          placeholder="Selecciones ruta padre">
          {routes &&
            routes.routes.map((route) => (
              <option value={route.id}>{route.nombre + " " + route.id}</option>
            ))}
        </Select>
      </Flex>
    </Stack>
  );
};

export default UpdateRoute;
