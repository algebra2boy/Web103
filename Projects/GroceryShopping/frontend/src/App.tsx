import { Link, useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes([
    // {
    //   path: '/',
    //   element: <Locations />
    // },
  ]);

  return (
    <div className="app">
      <header className="main-header">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <div className="header-buttons">
          <Link to="/" role="button">
            Home
          </Link>
        </div>
      </header>

      <main>{element}</main>
    </div>
  );
}

export default App;
