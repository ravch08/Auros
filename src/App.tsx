import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  Cart,
  Contact,
  Home,
  Layout,
  Page404,
  ProductsPage,
  Wishlist,
} from "./components/utils/helper";
import { fetchProducts } from "./store/CartSlice";
import store from "./store/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<Wishlist />} />
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

store.dispatch(fetchProducts());

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
