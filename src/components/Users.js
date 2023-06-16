import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

import { PageTitle } from "./PageTitle";
import { UserSimpleCard } from "./UserSimpleCard";

export const Users = ({ users }) => {
  return (
    <Stack spacing={2}>
      <PageTitle title="Users" />
      {users.length === 0 && (
        <Alert severity="warning">
          You have no users. Please click on the create user button to get
          started.
        </Alert>
      )}
      {users.length !== 0 && (
        <Stack direction="row" justifyContent="center">
          {users.map((user) => {
            return <UserSimpleCard user={user} />;
          })}
        </Stack>
      )}
    </Stack>
  );
};
