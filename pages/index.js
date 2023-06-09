import Image from 'next/image'
// import { Inter } from 'next/font/google'

import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import styles from './home.module.css'
import SignUp from '@/components/SignUp';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const theme = useTheme();
  return (
    <>
    <div className='container mt-2'>
      <div className='flex justify-center'>
        <div className={`icon flex justify-center mt-16 p-3 ${styles.circle}`}>
          <Image src='/Group 16.png' alt='' width={54.46} height={102}/>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='flex mt-16 justify-center'>
          <SignUp />
      </div>
    </div> 
    </>
  )
}
