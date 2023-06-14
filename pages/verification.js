import * as React from "react";
import Typography from "@mui/material/Typography";
import styles from "./verification.module.css";
import { Box, TextField, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Button, { ButtonProps } from "@mui/material/Button";
import Counter from "../components/Counter";
import Image from "next/image";
import { useState } from "react";

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
    width: "56px",
    height: "56px",
  },
});

export default function SignUp({ setShowSignIn }) {
  const theme = useTheme();
  const [token, setToken] = useState([]);
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "11"];

  // const [age, setAge] = useState(0);
  // const [name, setName] = useState("")

  // React.useEffect(() => {
  //   if (age) {
  //       // setName(name + "A")
  //       setName(prev => prev+"A")
  //     }
  // }, [age])

  // a = [1, 2, 3]

  // b = [...a, 4]

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
            <Link
              href="#"
              underline="none"
              sx={{ color: theme.palette.secondary.main }}
            >
              Edit phone number &nbsp;
            </Link>
            if its wrong.
          </Typography>
          <Stack className="justify-center mt-6" direction="row" spacing={1}>
            {[...Array(4).keys()].map((index) => (
              <CssTextField
                key={index}
                id="filled-basic"
                variant="filled"
                type="text"
                InputProps={{
                  disableUnderline: true,
                }}
                value={token[index] || ""}
              />
            ))}
          </Stack>
          <Counter />
          <Button
            variant="contained"
            sx={{
              borderRadius: "12px",
              width: "296px",
              height: "40px",
              margin: "auto",
            }}
          >
            Next
          </Button>
          <Box
            className="grid grid-cols-3 text-center justify-center items-center m-auto gap-y-4"
            sx={{ columnGap: "76px" }}
          >
            {numbers.map((number, index) => {
              if (number !== "11") {
                return (
                  <Link
                    href="#"
                    underline="none"
                    key={index}
                    color="disabled.dark"
                    sx={{
                      fontSize: "34px",
                      width: "20px",
                      height: "40px",
                    }}
                    onClick={() => {
                      setToken((prev) => [...prev, number]);
                    }}
                  >
                    {number}
                  </Link>
                );
              } else {
                return (
                  <Link href="#" className="flex justify-center" key={index}>
                    <Image
                      src="/clear.png"
                      alt="..."
                      width={20.82}
                      height={18}
                      className="self-center"
                      onClick={() => {
                        setToken((prev) => prev.slice(0, -1));
                      }}
                    />
                  </Link>
                );
              }
            })}
          </Box>
        </form>
      </div>
    </div>
  );
}
