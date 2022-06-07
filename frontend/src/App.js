import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/HomePage/Homepage";
import AllUsers from "./pages/AllUsers/AllUsers";
import UserById from "./pages/UserById/UserById";
import Footer from "./components/Footer/Footer";

export const config = {
  endpoint: "http://localhost:8082/v1",
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/user/:id" element={<UserById />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
