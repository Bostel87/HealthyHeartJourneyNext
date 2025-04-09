import { Geist, Geist_Mono, Open_Sans  } from "next/font/google";



export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export const titleFont = Open_Sans({
    weight : ["400", "700"], 
    variable: "--font-title",
    subsets: ["latin"],
  });