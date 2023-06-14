import * as React from "react";
import Typography from "@mui/material/Typography";
import styles from "./signup.module.css";
import { Button, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import Link from "@mui/material/Link";
import { useState } from "react";

const CssTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    border: "none",
    borderRadius: "12px",
    height: "48px",
    width: "296px",
  },
  "& .MuiFilledInput-root::before": {
    border: "none",
  },
  "& .MuiFilledInput-root::after": {
    border: "none",
  },
});

const register = async () => {
  try {
    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      body: JSON.stringify({
        title: "My post title",
        body: "My post content.",
      }),
    });
    const data = response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
export default function SignUp({ setShowSignIn }) {
  const [user, setUser] = useState({});
  return (
    <form className={`${styles.signup} p-8 mb-0 h-max gap-2`}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        Hi there!
      </Typography>
      <CssTextField
        id="filled-basic"
        type="number"
        label="Phone Number"
        variant="filled"
        InputProps={{
          disableUnderline: true,
        }}
      />
      <CssTextField
        id="filled-basic"
        label="Name"
        variant="filled"
        InputProps={{
          disableUnderline: true,
        }}
      />
      <CssTextField
        id="filled-basic"
        type="password"
        label="Password"
        variant="filled"
        InputProps={{
          disableUnderline: true,
        }}
      />
      <Link
        href="#"
        underline="none"
        className="text-center text-sm"
        sx={{ color: "secondary.main" }}
      >
        Forgot Password?
      </Link>
      <Button variant="contained" color="primary" sx={{ borderRadius: "12px" }}>
        Sign Up
      </Button>
      <p className="text-center">Or</p>
      <Stack
        className="justify-center items-center"
        direction="row"
        spacing={2}
      >
        <Link href="#" className={styles.icons}>
          <GoogleIcon />
        </Link>
        <Link href="#" className={styles.icons}>
          <FacebookOutlinedIcon />
        </Link>
        <Link href="#" className={styles.icons}>
          <AppleIcon />
        </Link>
      </Stack>
      <p className="text-center mt-auto">
        Already have an account? &nbsp;
        <Link
          href="#"
          underline="none"
          className="text-center text-sm"
          sx={{ color: "secondary.main" }}
        >
          <span
            onClick={() => {
              setShowSignIn(true);
            }}
          >
            Sign In
          </span>
        </Link>
      </p>
    </form>
  );
}
