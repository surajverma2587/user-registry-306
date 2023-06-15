import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";

export const UserForm = () => {
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
    gender: "male",
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
    console.log(values);
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      User Form
    </Box>
  );
};
