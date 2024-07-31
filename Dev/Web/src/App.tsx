import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import NavBar from "@/components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Router />
        <NavBar/>
    </BrowserRouter>
  );
}

export default App;