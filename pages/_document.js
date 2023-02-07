import { Html, Head, Main, NextScript } from "next/document";
import CusHead from "@/src/components/head";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <CusHead />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
