import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>Atomic ReDesign</title>
          <meta
            name="description"
            content="'Atomic ReDesign' is an extension of the famous 'Atomic Design'. When designing components such as React and Vue.js, We often had trouble. UI granularity classification constraints can prevent component design optimization."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
