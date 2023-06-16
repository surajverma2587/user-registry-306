import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";

import { PageTitle } from "../components/PageTitle";
import { UserFullCard } from "../components/UserFullCard";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const User = () => {
  const { userId } = useParams();

  const itemsFromLS = getFromLocalStorage("users");

  const user = itemsFromLS.find((itemFromLS) => {
    return itemFromLS.id === userId;
  });

  return (
    <Stack spacing={2}>
      <PageTitle title="User Card" />
      <UserFullCard user={user} />
    </Stack>
  );
};
