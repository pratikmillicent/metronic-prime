import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import App from "./App.tsx";
import "./theme.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <PrimeReactProvider
      value={{
        unstyled: false,
      }}
    >
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </StrictMode>
);
