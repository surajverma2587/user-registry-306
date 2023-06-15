import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { CreateUser } from "./pages/CreateUser";
import { User } from "./pages/User";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/users/:userId" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
