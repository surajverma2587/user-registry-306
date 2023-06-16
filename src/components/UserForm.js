import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import { ConfirmationModal } from "./ConfirmationModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserForm = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    firstName: "",
    lastName: "",
    gender: "male",
    age: "",
    email: "",
    profileImageUrl: "",
    linkedinUrl: "",
    githubUrl: "",
    bio: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Please select a title."),
    firstName: Yup.string().required("Please enter your first name."),
    lastName: Yup.string().required("Please enter your last name."),
    gender: Yup.string(),
    age: Yup.number()
      .min(18, "Minimum age is 18.")
      .max(100, "Please retire.")
      .required("Please enter your age."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Please enter your email address."),
    profileImageUrl: Yup.string()
      .url("Please enter a valid URL.")
      .required("Please enter your profile image URL."),
    linkedinUrl: Yup.string().url("Please enter a valid URL."),
    githubUrl: Yup.string().url("Please enter a valid URL."),
    bio: Yup.string()
      .min(10, "Minimum character length is 10.")
      .max(50, "Maximum character length is 50."),
  });

  const onSubmit = (values) => {
    const newUser = {
      ...values,
      id: uuidv4(),
    };

    const itemsFromLS = getFromLocalStorage("users");

    const newItems = [newUser, ...itemsFromLS];

    localStorage.setItem("users", JSON.stringify(newItems));

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    navigate("/");
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <Box sx={{ my: 4 }}>
      <ConfirmationModal open={open} handleClose={handleClose} />
      <Container maxWidth="sm">
        <Stack spacing={3} component="form" onSubmit={formik.handleSubmit}>
          <FormControl
            fullWidth
            error={formik.touched.title && !!formik.errors.title}
          >
            <InputLabel id="title">Title</InputLabel>
            <Select
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Dr">Dr</MenuItem>
            </Select>
            <FormHelperText>{formik.errors.title}</FormHelperText>
          </FormControl>
          <TextField
            name="firstName"
            error={formik.touched.firstName && !!formik.errors.firstName}
            label="First Name"
            value={formik.values.firstName}
            helperText={formik.errors.firstName}
            onChange={formik.handleChange}
          />
          <TextField
            name="lastName"
            error={formik.touched.lastName && !!formik.errors.lastName}
            label="Last Name"
            value={formik.values.lastName}
            helperText={formik.errors.lastName}
            onChange={formik.handleChange}
          />
          <FormControl>
            <FormLabel id="gender">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              name="gender"
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            type="number"
            name="age"
            error={formik.touched.age && !!formik.errors.age}
            label="Age"
            value={formik.values.age}
            helperText={formik.errors.age}
            onChange={formik.handleChange}
          />
          <TextField
            name="email"
            error={formik.touched.email && !!formik.errors.email}
            label="Email Address"
            value={formik.values.email}
            helperText={formik.errors.email}
            onChange={formik.handleChange}
          />
          <TextField
            name="profileImageUrl"
            error={
              formik.touched.profileImageUrl && !!formik.errors.profileImageUrl
            }
            label="Profile Image URL"
            value={formik.values.profileImageUrl}
            helperText={formik.errors.profileImageUrl}
            onChange={formik.handleChange}
          />
          <TextField
            name="linkedinUrl"
            error={formik.touched.linkedinUrl && !!formik.errors.linkedinUrl}
            label="LinkedIn URL"
            value={formik.values.linkedinUrl}
            helperText={formik.errors.linkedinUrl}
            onChange={formik.handleChange}
          />
          <TextField
            name="githubUrl"
            error={formik.touched.githubUrl && !!formik.errors.githubUrl}
            label="GitHub URL"
            value={formik.values.githubUrl}
            helperText={formik.errors.githubUrl}
            onChange={formik.handleChange}
          />
          <TextField
            name="bio"
            error={formik.touched.bio && !!formik.errors.bio}
            label="Short Bio"
            value={formik.values.bio}
            helperText={formik.errors.bio}
            onChange={formik.handleChange}
            multiline
            rows={6}
          />
          <Box sx={{ textAlign: "center" }}>
            <Button variant="contained" type="submit">
              Create User
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
