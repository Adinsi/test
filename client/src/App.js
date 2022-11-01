import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Condition from "./component/Form/condition";
import Forgetpassword from "./component/Form/forget_password";
import Formulaire from "./component/Form/Formulaire";
import Resetpassword from "./component/Form/resetpassword";
import Help from "./component/pages/help";
import Home from "./component/pages/home";
import Editprofil from "./component/pages/profil/editprofil";
import Profil from "./component/pages/profil/profil";
import Search from "./component/pages/search";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" exact element={<Formulaire />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/edit_profil" element={<Editprofil />} />
        <Route path="/condtion_generale" element={<Condition />} />
        <Route path="/forget_password" element={<Forgetpassword />} />
        <Route path="/resetpassword/activate/:id" element={<Resetpassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
