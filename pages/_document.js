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
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

            
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            
            <title>ThewayShop - Ecommerce</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>

           
            <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon"/>
            <link rel="apple-touch-icon" href="assets/images/apple-touch-icon.png"/>

            
            <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
           
            <link rel="stylesheet" href="assets/css/style.css"/>
           
            <link rel="stylesheet" href="assets/css/responsive.css"/>
           
            <link rel="stylesheet" href="assets/css/custom.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
            <script src="assets/js/jquery-3.2.1.min.js"></script>
            <script src="assets/js/popper.min.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>
            <script src="assets/js/jquery.superslides.min.js"></script>
            <script src="assets/js/bootstrap-select.js"></script>
            <script src="assets/js/inewsticker.js"></script>
            <script src="assets/js/bootsnav.js."></script>
            <script src="assets/js/images-loded.min.js"></script>
            <script src="assets/js/isotope.min.js"></script>
            <script src="assets/js/owl.carousel.min.js"></script>
            <script src="assets/js/baguetteBox.min.js"></script>
            <script src="assets/js/form-validator.min.js"></script>
            <script src="assets/js/contact-form-script.js"></script>
            <script src="assets/js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument