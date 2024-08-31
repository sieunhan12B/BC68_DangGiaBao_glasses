import { BrowserRouter } from "react-router-dom";
import "./App.css";
import useRoutesCustom from "./hook/useRoutesCustom";

function App() {
  const routes = useRoutesCustom();
  return <>{routes}</>;
}

export default App;
