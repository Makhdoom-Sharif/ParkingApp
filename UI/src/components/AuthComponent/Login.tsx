// import { CheckBox } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  Controller,
  useController,
  UseControllerProps,
  useForm,
} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GetAllPlaces, login } from "../../apiCalls";
import { ComponentChange, loginStart } from "../../redux/action";
import InputField from "../Inputfield/InputField";
// import LoadingButton from '@mui/lab';

import "./style.css";
// import { useForm } from 'react-hook-form'
type Props = {};

type FormValues = {
  email: string;
  password: string;
};

type SelectorType = {
  user: {
    accessToken: string;
    contactNo: string;
    email: string;
    errorMessage: string;
    isAdmin: boolean;
    loading: boolean;
    loginStatus: boolean;
    uid: string;
    username: string;
  };
};

function Input(props: UseControllerProps<FormValues>) {
  const { field, fieldState } = useController(props);
  console.log("works");
  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.error ? "invalid" : "valid"}</p>
    </div>
  );
}

function Login({}: Props) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: SelectorType) => state?.user);
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const onSubmit = async (data: FormValues) => {
    try {
      await login(dispatch, data);
      dispatch(ComponentChange("AreaView"));
      navigate("/Home");
    } catch (e) {}
  };

  return (
    <Box>
      <Container
        // maxWidth="xs"
        sx={{ maxWidth: "100% !important" }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box
          sx={{
            maxWidth: "100% !important",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <InputField
                label="Email"
                id="email"
                focused={false}
                name="email"
                required={true}
                type="email"
                value={value}
                onChange={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <InputField
                label="Password"
                focused={false}
                name="password"
                id="password"
                required={true}
                type="password"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            sx={{
              width: "100%",
              marginBottom: "25px",
              ".css-14pfdve-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-14pfdve-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate":
                {
                  color: "#4056C8",
                },
            }}
          />
          <LoadingButton
            variant="contained"
            color="secondary"
            loadingIndicator={
              <CircularProgress style={{ color: "#fff" }} size={16} />
            }
            className="Authbutton"
            type="submit"
            disabled={loading}
            loading={loading}
          >
            Login
          </LoadingButton>
          <Grid
            container
            sx={{
              margin: "25px",
              display: "flex",
              flexDirection: { md: "row", sm: "column", xs: "column" },
              alignItems: "flex-start",
            }}
          >
            <Grid
              item
              xs
              sx={{
                display: "flex",
                marginBottom: { md: 0, sm: "20px", xs: "20px" },
              }}
            >
              <Link to="#" style={{ color: "#00000099" }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="#" style={{ color: "#00000099" }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
