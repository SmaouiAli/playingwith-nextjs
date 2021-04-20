import '../styles/globals.css'
import {Toolbar} from '../components/toolbar'
function MyApp({ Component, pageProps }) {
    
  return <>
  <Toolbar/>
  <Component {...pageProps} />
  </>
}

MyApp.getinitailProps = () => {
  return {
    
  }
}
export default MyApp
