import type { AppProps } from "next/app";
import { globalStyles } from "styles/globalStyles";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { DarkTheme } from "@stitchesConfig";
import { Layout } from "@src/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      value={{ dark: DarkTheme.className, light: "light" }}
    >
      <Layout>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
