import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { ToastContainer } from 'react-toastify'

import '../styles/index.scss'

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap')
}

export default function MyApp ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer/>
    </Provider>
  )
}
