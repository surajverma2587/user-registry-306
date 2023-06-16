import { useState } from "react";
import Stack from "@mui/material/Stack";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import { Banner } from "../components/Banner";
import { Users } from "../components/Users";

export const Home = () => {
  return (
    <Stack spacing={2}>
      <Banner />
      <Users users={getFromLocalStorage("users")} />
    </Stack>
  );
};
