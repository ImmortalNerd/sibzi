import * as React from "react";
import Typography from "@mui/material/Typography";
import styles from "./verification.module.css";
import { TextField, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Button, { ButtonProps } from "@mui/material/Button";
import Image from "next/image";

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
      <div className="w-full md:w-fit mb-0">
        <form className={`${styles.signup} p-8 mb-0 gap-4`}>
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
          <div className="container flex w-52 justify-center items-center m-auto">
            <div className="grid-container grid grid-cols-3 text-center gap-y-4 gap-x-16">
              <Typography
                sx={{ color: theme.palette.disabled.dark, fontSize: "34px" }}
              >
                1
              </Typography>
              <Typography
                sx={{ color: theme.palette.disabled.dark, fontSize: "34px" }}
              >
                2
              </Typography>
              <Typography
                sx={{ color: theme.palette.disabled.dark, fontSize: "34px" }}
              >
                3
              </Typography>
              <Typography
                sx={{ color: theme.palette.disabled.dark, fontSize: "34px" }}
              >
                4
              </Typography>
              <Typography
                sx={{ color: theme.palette.disabled.dark, fontSize: "34px" }}
              >
                5
              </Typography>
              <Typography
                sx={{ color: theme.palette.disabled.dark, fontSize: "34px" }}
              >
                6
              </Typography>
              <Typography
                sx={{ color: theme.palette.disabled.dark, fontSize: "34px" }}
              >
                7
              </Typography>
              <Typography
                sx={{ color: theme.palette.disabled.dark, fontSize: "34px" }}
              >
                8
              </Typography>
              <Typography
                sx={{ color: theme.palette.disabled.dark, fontSize: "34px" }}
              >
                9
              </Typography>
              <Typography
                sx={{ color: theme.palette.disabled.dark, fontSize: "34px" }}
              ></Typography>
              <Typography
                sx={{ color: theme.palette.disabled.dark, fontSize: "34px" }}
              >
                0
              </Typography>
              <div>
                <Image src="/clear.png" alt="..." width={20.82} height={18} hidden={false}/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
