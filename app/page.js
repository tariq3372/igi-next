"use client"

import Script from "next/script"
import * as gtag from "./gtag"

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
// import Router from 'next/router'

export default function Home(props) {

  const router = useRouter()
  const pathname= usePathname()
  // useEffect(() => {
  //   const handleRouteChange = url => {
  //     gtag.pageview(url)
  //   }
  //   Router.events.on("routeChangeComplete", handleRouteChange)
  //   return () => {
  //     Router.events.off("routeChangeComplete", handleRouteChange)
  //   }
  // }, [Router.events])

  useEffect(() => {
    if (pathname == '/') {
      router.push('/en');
    }
  }, [pathname, router]);
  
  return (
    <>
    {/* <!-- Google tag (gtag.js) --> */}
    {/* <Script
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
      /> */}
    </>
  )
}
