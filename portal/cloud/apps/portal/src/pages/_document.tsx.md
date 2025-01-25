import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx)

    return initalProps
  }

  render() {
    return (
      <Html lang="en" className="w-full h-screen overflow-hidden">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="w-full h-screen overflow-hidden antialiased bg-ds-background">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
