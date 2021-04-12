import '../styles/globals.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { PageTransition } from 'next-page-transitions'
import Loader from "../component/Loader";
import Toastify from "../component/toastify/toastify";
import ToastifyContext from "../component/toastify/context";


const TIMEOUT = 400

function MyApp({ Component, pageProps}) {


    return (

         <div className="App">
            <ToastifyContext.Provider value={new Toastify()}>


                    <Component {...pageProps}/>



            </ToastifyContext.Provider>
        </div>

        )

}

export default MyApp
