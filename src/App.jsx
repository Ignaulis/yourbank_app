import Main from "./components/Main";
import { Router } from "./context/Router";


export default function App() {

  return (
    <Router>
      <Main />
    </Router>
  );
}