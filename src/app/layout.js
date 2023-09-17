import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {ThemeContextProvider} from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Null',
  description: 'Void of my thoughts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
            <ThemeProvider>
                <div className="container">
                <div className="wrapper">
                    <Navbar/>
                    {children}
                </div>
                    <Footer/>
                </div>
            </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
