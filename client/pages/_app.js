import { UserProvider } from "../context";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import Script from "next/script";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }) {
    const noHeaderFooter = ['Login', 'Register'];
    return (
        <UserProvider>
        <Head>
            <title>Grocery Store</title>

            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="icon" href="/assets/img/favicon.png" type="image/png" sizes="16x16"></link>
            <title>GroStore - Grocery eCommerce</title>
            <link rel="stylesheet" href="/assets/css/main.css"></link>
            <link rel="stylesheet" href="/assets/css/custom.css"></link>

            <script src="/assets/js/vendors/jquery-3.6.0.min.js"></script>
            <script src="/assets/js/vendors/jquery-ui.min.js"></script>
            <script src="/assets/js/vendors/bootstrap.bundle.min.js"></script>
            <script src="/assets/js/vendors/swiper-bundle.min.js"></script>

        </Head>
        
        {
            !noHeaderFooter.includes(Component.name) && <Nav />
        }

        <ToastContainer theme="colored"/>
        <Component {...pageProps} />

        {
            !noHeaderFooter.includes(Component.name) && <Footer />
        }

        <Script src="/assets/js/vendors/parallax-scroll.js"></Script>
        <Script src="/assets/js/vendors/isotop.pkgd.min.js"></Script>
        <Script src="/assets/js/app.js"></Script>
        </UserProvider>
    );
}

export default MyApp;