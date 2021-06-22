import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import Routes from "./templates/Routes";
import NewRoute from "./templates/NewRoute";

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Routes />
        <NewRoute />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
