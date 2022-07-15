import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "styles/theme";
import App from "components/App";

import CSSReset from "./components/CSSReset";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider theme={theme} resetCSS={false}>
    <CSSReset />
    <App />
  </ChakraProvider>
);
