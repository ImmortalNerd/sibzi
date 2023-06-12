import * as React from "react";
import Typography from "@mui/material/Typography";
import styles from "./verification.module.css";
import { TextField, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import Button, { ButtonProps } from "@mui/material/Button";

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
  "& .MuiFilledInput-input": {
    height: "56px",
    width: "56px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "0.5rem",
    fontSize: "1.5rem",
  },
  "& .MuiFilledInput-root": {
    justifyContent: "center",
    alignItems: "center",
  },
});
const ColorButton = styled(Button)({
  backgroundColor: "red",
});
const token = "5873";
export default function SignUp({ setShowSignIn }) {
  const theme = useTheme();

  return (
    <div className="container flex flex-col	justify-end items-center h-screen">
      <div className="w-full md:w-fit mb-0 h-4/5">
        <form className={`${styles.signup} p-8 mb-0 h-max gap-4`}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            Verification
          </Typography>
          <Typography>
            Enter the code we sent +989128452301.
            <br />
            <Link href="#" className={styles.linkColor}>
              Edit phone number
            </Link>
            if its wrong.
          </Typography>
          <Stack className="justify-center mt-6" direction="row" spacing={1}>
            {[...Array(4).keys()].map((index) => (
              <CssTextField
                key={index}
                id="filled-basic"
                variant="filled"
                type="number"
                InputProps={{
                  disableUnderline: true,
                }}
                value={token[index]}
              />
            ))}
          </Stack>
          <Typography
            className="text-center"
            sx={{ color: theme.palette.disabled.main }}
          >
            Remaining time: 1:15
          </Typography>
          <Button variant="contained">Next</Button>
          <div className="container flex w-52 justify-centeritems-center">
            <div className="flex col-3 text-center">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>0</div>
              <div>*</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
