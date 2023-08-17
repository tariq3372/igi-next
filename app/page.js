"use client"

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Router from 'next/router'

export default function Home(props) {

  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/') {
      Router.push('/login');
    }
  }, [props]);
  
  return
}
