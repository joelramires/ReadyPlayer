import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        
        <link rel="preconnect"  href="https://fonts.gstatic.com" crossorigin/>
        <link rel="preload" as="style" href="https://fonts.googleapis.com"/>
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
        <script rel='preload' as='style' src="https://use.fontawesome.com/062de8b021.js"></script>


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument