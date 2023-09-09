"use client"

import Script from "next/script"
// import { useRouter } from "next/router"
import * as gtag from "./gtag"

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Router from 'next/router'

export default function Home(props) {

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/') {
      Router.push('/login');
    }
  }, [props]);
  
  return (
    <>
    {/* <!-- Google tag (gtag.js) --> */}
    <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
