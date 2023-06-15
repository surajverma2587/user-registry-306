import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate();

  return (
    <Paper elevation={3}>
      <Stack
        alignContent="center"
        alignItems="center"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Typography component="h1" variant="h5">
          User Register
        </Typography>
        <Typography component="h2" variant="caption">
          Manage your company's resources like a pro!
        </Typography>
        <Box sx={{ align: "text-center" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {
              navigate("/create-user");
            }}
          >
            Add User
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};
