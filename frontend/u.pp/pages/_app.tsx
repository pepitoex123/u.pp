import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {FC} from "react";

function MyApp({ Component, pageProps }: AppProps & {Component: {Layout: FC}}) {
  return <Component {...pageProps} />
}

export default MyApp
