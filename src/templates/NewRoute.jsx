import { Flex, Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Input, Select, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addRoute } from "../redux/actions";
import PrimaryButton from "../components/buttons/PrimaryButton";
import IsValidInputCreate from "../validates/IsValidInputCreate";
import Notify from "../components/Notify";

const NewRoute = () => {
  const [values, setValues] = useState();
  const routes = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const crearRuta = () => {
    const errors = IsValidInputCreate({ ...values });
    if (Object.keys(errors).length === 0) {
      const isValid = routes.routes.findIndex((x) => x.id === values.id);
      if (isValid >= 0) {
        return Notify({
          title: `Error creando ruta con Id ${values.id}`,
          description: `El id ${values.id} ya se encuentra registrado`,
          type: "error",
        });
      }
      dispatch(addRoute(values));
    } else {
      return Notify({
        title: `Error en el campo ${Object.keys(errors)}`,
        description: `${Object.values(errors)}`,
        type: "error",
      });
    }
  };

  return (
    <Flex alignItems="center" flexDir="column">
      <Flex flexDir="column" w="40%">
        <Heading mb="15px" as="h4" size="md">
          Crear Ruta
        </Heading>
        <Stack spacing={6}>
          <Flex flexDir="column">
            <Heading mb="5px" as="h5" size="sm">
              Id
            </Heading>
            <Input
              type="number"
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
              onChange={handleChange}
              name="idRutaPadre"
              placeholder="Selecciones ruta padre">
              {routes &&
                routes.routes.map((route) => (
                  <option value={route.id}>
                    {route.nombre + " " + route.id}
                  </option>
                ))}
            </Select>
          </Flex>
        </Stack>
        <Flex margin="15px" justifyContent="flex-end">
          <PrimaryButton onClick={() => crearRuta()}>Crear ruta</PrimaryButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewRoute;
