import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Cart,
  Contact,
  Home,
  Layout,
  Page404,
  ProductsPage,
} from "./components/utils/helper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="*" element={<Page404 />} />
    </Route>,
  ),
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
