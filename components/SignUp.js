import * as React from "react";
import Typography from "@mui/material/Typography";
import styles from "./signup.module.css";
import { Button, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";

const CssTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    border: "none",
    borderRadius: "12px",
  },
  "& .MuiFilledInput-root::before": {
    border: "none",
  },
  "& .MuiFilledInput-root::after": {
    border: "none",
  },
});

export default function SignUp({ setShowSignIn }) {
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
      <Button size="small" color="secondary">
        <Link href="#">Forgot Password?</Link>
      </Button>
      <Button className="signup-btn" variant="contained" color="primary">
        Sign In
      </Button>
      <p className="text-center">Or</p>
      <Stack className="justify-center" direction="row" spacing={2}>
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
        Already have an account?
        <Button size="small" color="secondary">
          <span
            onClick={() => {
              setShowSignIn(true);
            }}
          >
            Sign In
          </span>
        </Button>
      </p>
    </form>
  );
}
