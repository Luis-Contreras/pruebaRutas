import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoutes,
  searchByIdRoute,
  searchByParentRoute,
  searchByBoth,
} from "../redux/actions";
import HeaderTable from "../components/table/HeaderTable";
import BodyTable from "../components/table/BodyTable";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecundaryButton from "../components/buttons/SecundaryButton";
import { deleteRoute, updateRoute } from "../redux/actions";
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex } from "@chakra-ui/layout";
import Modal from "../components/Modal";
import UpdateRoute from "./UpdateRoute";
import Notify from "../components/Notify";
import IsValidInputUpdate from "../validates/IsValidInputUpdate";
import SearchRoutes from "./SearchRoutes";

const Routes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updateRuoute, setUpdateRoute] = useState();
  const dispatch = useDispatch();
  const routes = useSelector((state) => state);
  const [values, setValues] = useState({});
  const [filter, setFilter] = useState();

  useEffect(() => {
    const getAllRoutes = async () => {
      await dispatch(getRoutes());
    };
    getAllRoutes();
  }, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const onChangeFilters = (e) => {
    setFilter(e);
  };

  const handleChangeSearch = (e) => {
    const value = e.target.value;

    if (value.length < 3) return dispatch(getRoutes());

    if (filter.length > 1) {
      return dispatch(searchByBoth(value));
    }

    if (!filter) {
      return Notify({
        title: `Error`,
        description: `Se debe de seleccionar al menos un filtro para iniciar la busqueda`,
        type: "warning",
      });
    }

    if (filter[0] === "idRuta") {
      return dispatch(searchByIdRoute(value));
    }

    if (filter[0] === "rutaPadre") {
      return dispatch(searchByParentRoute(value));
    }
  };

  const updateRouteAction = () => {
    const errors = IsValidInputUpdate({ ...values });
    if (Object.keys(errors).length === 0) {
      dispatch(updateRoute(values));
      onClose();
      return Notify({
        title: `Id ruta ${values.id}`,
        description: `se actualizo correctamente`,
        type: "success",
      });
    } else {
      return Notify({
        title: `Error en el campo ${Object.keys(errors)}`,
        description: `${Object.values(errors)}`,
        type: "error",
      });
    }
  };

  return (
    <Flex flexDir="column" alignItems="center">
      <SearchRoutes
        handleChangeSearch={handleChangeSearch}
        onChangeFilters={onChangeFilters}
      />
      <HeaderTable>
        {routes &&
          routes.routes &&
          routes.routes.map((route) => (
            <BodyTable {...route}>
              <SecundaryButton
                onClick={() => dispatch(deleteRoute(route.id))}
                size="xs"
                ml="2px">
                Borrar
              </SecundaryButton>
              <PrimaryButton
                onClick={() => {
                  onOpen();
                  setUpdateRoute(route);
                  setValues(route);
                }}
                size="xs">
                Actualizar
              </PrimaryButton>
            </BodyTable>
          ))}
      </HeaderTable>
      <Modal
        actions={
          <PrimaryButton onClick={updateRouteAction}>Actualizar</PrimaryButton>
        }
        isOpen={isOpen}
        onClose={onClose}>
        <UpdateRoute
          data={updateRuoute}
          routes={routes}
          handleChange={handleChange}
        />
      </Modal>
    </Flex>
  );
};

export default Routes;
