import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import MyCalendar from "./components/Calendar";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <MyCalendar />
    </BrowserRouter>
  );
}

export default App;
