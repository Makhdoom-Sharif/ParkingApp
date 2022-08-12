import { LoadingButton } from "@mui/lab";
import { Button, CircularProgress, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  Controller,
  useController,
  UseControllerProps,
  useForm,
} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAllPlaces, login } from "../../apiCalls";
import { loginStart } from "../../redux/action";
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
      // await GetAllPlaces(dispatch);
      // console.log("object");
      navigate("/Park");
    } catch (e) {}
  };

  return (
    <Box>
      <Container
        maxWidth="xs"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box
          sx={{
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

          <LoadingButton
            variant="contained"
            color="secondary"
            fullWidth
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
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
