import type { AppProps } from "next/app";
import { globalStyles } from "styles/globalStyles";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { DarkTheme } from "@stitchesConfig";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      value={{ dark: DarkTheme.className, light: "light" }}
    >
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
