import { Provider } from 'react-redux'
import Layout from '../components/Layout/Layout'
import { store } from '../FakeApi/Store/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
