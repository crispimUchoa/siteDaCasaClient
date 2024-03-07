'use client'
import HeaderAuth from "@/components/common/headerAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


  export default function AreaLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const router = useRouter()
    useEffect(()=>{
        if(!localStorage.getItem('house-login')) {
            router.push('/login')
          }
    },[])

    return (
      <>
          {children}
      </>
    );
  }
  