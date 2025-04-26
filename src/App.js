import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./pages/login";
import Signup from "./pages/signup";
import Success from "./pages/success";
import Fail from "./pages/fail";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/success" element={<Success/>}></Route>
      <Route path="/fail" element={<Fail/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;