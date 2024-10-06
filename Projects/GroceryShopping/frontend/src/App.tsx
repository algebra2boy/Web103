import { useRoutes } from "react-router-dom";
import { AddGroceryPage, MainPage, UpdateGroceryPage } from "./pages";

function App() {
  let pageElement = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/add",
      element: <AddGroceryPage />,
    },
    {
      path: "/update/:id",
      element: <UpdateGroceryPage />,
    },
  ]);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">
            Grocery Tracker
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/add">Add Grocery</a>
            </li>
          </ul>
        </div>
      </div>
      <main>{pageElement}</main>
    </>
  );
}

export default App;
