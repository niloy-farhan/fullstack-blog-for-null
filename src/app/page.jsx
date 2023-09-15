import styles from "./homepage.module.css";
import Link from "next/link";
import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/navbar"

export default function Home() {
  return <div>
      <Navbar/>
      <Footer/>
  </div>;
}
