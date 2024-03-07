"use client"
import useSWR from "swr";
import styles from "./page.module.css";
import taskServices, { TaskType } from "@/services/taskServices";
import { useEffect } from "react";
import HomeNoAuthSection from "@/components/homeNoAuth/homeNoAuthSection";
import Head from "next/head";
export default function HomeNoAuth() {
  useEffect(()=>{

  }, [])
  return (
    <>
    <Head>
      <title>{process.env.SITE_NAME} - Bem-vindo</title>
    </Head>
    <main className={styles.main}>
      <HomeNoAuthSection/>
    </main>
    </>
  );
}
