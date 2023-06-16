import Stack from "@mui/material/Stack";

import { UserForm } from "../components/UserForm";
import { PageTitle } from "../components/PageTitle";

export const CreateUser = () => {
  return (
    <Stack spacing={2}>
      <PageTitle title="User Form" />
      <UserForm />
    </Stack>
  );
};
