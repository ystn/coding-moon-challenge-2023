import '@/styles/globals.css';
// import { config } from '@fontawesome/fontawesome-svg-core';
import { Inter } from '@next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css';
// config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
