const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ROUTE":
      return {
        ...state,
        routes: [...state.routes, action.payload],
      };
    case "GET_ROUTES":
      return {
        routes: action.payload,
      };
    case "DELETE_ROUTE":
      return {
        ...state,
        routes: state.routes.filter((router) => router.id !== action.payload),
      };
    case "UPDATE_ROUTE":
      const data = state.routes.findIndex((x) => x.id === action.payload.id);
      state.routes[data] = action.payload;
      return {
        ...state,
        routes: state.routes,
      };
    case "SEARCH_BY_IDROUTE":
      return {
        ...state,
        routes: state.routes.filter((route) => route.id === action.payload),
      };
    case "SEARCH_BY_PARENTROUTE":
      return {
        ...state,
        routes: state.routes.filter(
          (route) => route.idRutaPadre === action.payload
        ),
      };
    case "SEARCH_BY_BOTH":
      return {
        ...state,
        routes: state.routes.filter(
          (route) =>
            route.idRutaPadre === action.payload || route.id === action.payload
        ),
      };

    default:
      return state;
  }
};

export default reducer;
