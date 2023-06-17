import Typography from "@mui/material/Typography";
import styles from "./signup.module.css";
import { Button, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import Link from "@mui/material/Link";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";

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

export default function SignUp({ setShowSignIn }) {
  const [user, setUser] = useState({ name: "", phone: "", password: "" });

  const router = useRouter();

  const handleChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:5500/auth/register", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        setUser({ name: "", phone: "", password: "" });
        router.push({
          pathname: "/verification",
          query: { userId: data.id, phone: data.phone },
        });
      } catch (err) {
        console.log(err);
      }
    },
    [user, router]
  );

  return (
    <div className={`${styles.signup} p-8 mb-0 h-max gap-2`}>
      <form onSubmit={handleSubmit}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Hi there!
        </Typography>
        <div className="flex flex-col gap-4">
          <CssTextField
            id="filled-basic"
            type="number"
            label="Phone Number"
            value={user.phone}
            name="phone"
            variant="filled"
            InputProps={{
              disableUnderline: true,
            }}
            onChange={handleChange}
            required
          />
          <CssTextField
            id="filled-basic"
            type="text"
            label="Name"
            value={user.name}
            name="name"
            variant="filled"
            InputProps={{
              disableUnderline: true,
            }}
            onChange={handleChange}
            required
          />
          <CssTextField
            id="filled-basic"
            type="password"
            label="Password"
            name="password"
            value={user.password}
            variant="filled"
            InputProps={{
              disableUnderline: true,
            }}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ borderRadius: "12px" }}
          >
            Sign Up
          </Button>
        </div>
      </form>
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
    </div>
  );
}
