import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFoundProduct } from "./pages/404";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ProductPage } from "./pages/ProductPage";
import useUserStore from "./store/useStore";

function App() {
  const user = useUserStore((state) => state.user);
  return (
    <MantineProvider
      theme={{ colorScheme: "light" }}
      withGlobalStyles
      withNormalizeCSS
    >
      {user ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="*" element={<NotFoundProduct />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </MantineProvider>
  );
}

export default App;
