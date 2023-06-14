import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage, HomePage, Root } from "./Pages";
import { PokemonDetailPage } from "./Pages/PokemonDetailPage";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/pokemon/:name",
          element: <PokemonDetailPage />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

export default App
