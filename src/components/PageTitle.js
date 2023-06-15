import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export const PageTitle = ({ title }) => {
  return (
    <Stack>
      <Typography component="h3" variant="h5" align="center">
        {title}
      </Typography>
      <Divider />
    </Stack>
  );
};
