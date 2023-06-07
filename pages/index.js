import Image from 'next/image'
// import { Inter } from 'next/font/google'

import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import styles from './home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const theme = useTheme();
  return (
    <div className='container mt-2'>
      <div className='flex justify-center'>
        <div className={`flex justify-center mt-6 p-3 ${styles.circle}`}>
          <Image src='/Group 16.png' alt='' width={54.46} height={102}/>
        </div>
      </div>
      
    </div>
  )
}
