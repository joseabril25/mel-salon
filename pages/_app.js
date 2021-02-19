import '../static/css/bootstrap.min.css'
import '../static/css/slick.css'
import '../static/css/animate.css'
import '../static/css/flaticon.css'
import '../static/css/boxicons.min.css'
import 'odometer/themes/odometer-theme-default.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-image-lightbox/style.css';
import '../static/styles/style.scss'
import '../components/modal/modal.scss'
import '../components/sign-in/sign-in.scss'
import '../components/contact-us/contact-us.scss'
import '../components/suggest-form/suggest-form.scss'
import '../components/apply-form/apply-form.scss'
import '../components/apply-confirm/apply-confirm.scss'
import '../components/apply-finish/apply-finish.scss'
import '../components/apply/apply.scss'
import '../components/play/play.scss'
import '../components/wheel/wheel.scss'
// If you want to change the theme color you should comment out above line and uncomment the below line and change the color names from list
/*
* brink-pink-style.css
* pink-style.css
* purple-style.css
*/
// import '../static/styles/brink-pink-style.css'
import '../static/css/responsive.css'

import { DefaultSeo } from "next-seo";
import React from 'react';
import { wrapper } from '../store/store';

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <DefaultSeo
        title="StartP - React Next IT Startups & Digital Services Template"
        description="StartP is a React and Bootstrap 4 based Professional website template. This has been built with React, ES6+ and as framework Next.js and Express.js."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://startp-react.envytheme.com/",
          site_name:
            "StartP - React Next IT Startups & Digital Services Template"
        }}
      />
        <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp)