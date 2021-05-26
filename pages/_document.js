import Document, { Html, Head, Main, NextScript } from 'next/document'
import HeadPart from '../components/Shared/HeadPart/HeadPart'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <HeadPart />
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