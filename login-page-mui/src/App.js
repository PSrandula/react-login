import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import TokenView from "./pages/TokenView";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/token" element={<TokenView />} />
    </Routes>
  );
};

export default App;
