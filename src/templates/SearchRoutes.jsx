import { Input } from "@chakra-ui/input";
import { Flex, Heading, HStack } from "@chakra-ui/layout";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import React from "react";

const SearchRoutes = ({ handleChangeSearch, onChangeFilters }) => {
  return (
    <Flex w="75%">
      <Flex flexDir="column">
        <Heading mb="5px" as="h5" size="sm">
          Busqueda
        </Heading>
        <Input
          onChange={handleChangeSearch}
          name="search"
          placeholder="Buscar..."
          type="number"
          size="md"
        />
      </Flex>
      <Flex m="15px" mt="31px">
        <CheckboxGroup onChange={onChangeFilters} colorScheme="teal">
          <HStack>
            <Checkbox value="idRuta">id ruta</Checkbox>
            <Checkbox value="rutaPadre">ruta padre</Checkbox>
          </HStack>
        </CheckboxGroup>
      </Flex>
    </Flex>
  );
};

export default SearchRoutes;
