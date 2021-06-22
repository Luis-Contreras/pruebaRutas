import {
  getAllRoutes,
  deleteRouteApi,
  createRouteApi,
  updateRouteApi,
} from "../../api";

export const addRoute = (data) => async (dispatch) => {
  try {
    await createRouteApi(data);
    dispatch({
      type: "ADD_ROUTE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getRoutes = () => async (dispatch) => {
  try {
    const res = await getAllRoutes();
    dispatch({
      type: "GET_ROUTES",
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteRoute = (dataId) => async (dispatch) => {
  try {
    const res = await deleteRouteApi(dataId);
    dispatch({
      type: "DELETE_ROUTE",
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateRoute = (data) => async (dispatch) => {
  try {
    await updateRouteApi(data);
    dispatch({
      type: "UPDATE_ROUTE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchByIdRoute = (value) => ({
  type: "SEARCH_BY_IDROUTE",
  payload: value,
});

export const searchByParentRoute = (value) => ({
  type: "SEARCH_BY_PARENTROUTE",
  payload: value,
});

export const searchByBoth = (value) => ({
  type: "SEARCH_BY_BOTH",
  payload: value,
});
