import Image from "next/image";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "./home.module.css";
import SignUp from "@/components/SignUp";
import SignIn from "@/components/SignIn";
import { useState } from "react";
import { useEffect } from "react";
import Slide from "@mui/material/Slide";
import Switch from '@mui/material/Switch';
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      <div className="container flex flex-col items-center h-screen w-screen">
        <div className="flex items-center">
          <div
            className={`icon flex justify-center items-center mt-16 p-3 ${styles.circle}`}
          >
            <Image src="/Group 16.png" alt="" width={54.46} height={102} />
          </div>
        </div>

        <div className="grow form w-full md:w-fit mb-0 mt-16">
          {showSignIn ? (
            <SignIn setShowSignIn={setShowSignIn} />
          ) : (
            <SignUp setShowSignIn={setShowSignIn} />
          )}
        </div>
      </div>
    </>
  );
}
