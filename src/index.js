import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* //colocamos o ChakraProvider abaixo */}
    {/* todo mundo que está dentro do app tem acesso aos chakras. Chakra engloba o app */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);
