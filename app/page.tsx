import Image from "next/image";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Opening from "@/components/Opening";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Opening/>
  );
}
