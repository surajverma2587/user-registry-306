import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const UserSimpleCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: "345px", m: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={user.profileImageUrl}
        alt={`${user.title}. ${user.firstName} ${user.lastName}`}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.title}. {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.age} yrs
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            navigate(`/users/${user.id}`);
          }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};
