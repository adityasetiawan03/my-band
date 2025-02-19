// src/pages/_app.tsx
import '../styles/globals.css';
import 'w3-css/w3.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

