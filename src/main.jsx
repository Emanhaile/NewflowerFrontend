import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/css/fontello/css/fontello.css';
import './assets/css/entypo/entypo.min.css';
import './assets/css/style.css';
import './assets/css/template.shortcodes.css';
import './assets/css/template.css';
import './assets/css/core.animation.css';
import './assets/js/vendor/magnific/magnific-popup.css';
import './assets/js/vendor/woocommerce/assets/css/woocommerce-smallscreen.css';
import './assets/js/vendor/woocommerce/assets/css/woocommerce-layout.css';
import './assets/js/vendor/woocommerce/assets/css/woocommerce.css';
import './assets/js/vendor/woocommerce/assets/css/plugin.woocommerce.css';
import './assets/js/vendor/essential-grid/public/assets/css/lightbox.css';
import './assets/js/vendor/essential-grid/public/assets/css/settings.css';
import './assets/js/vendor/revslider/public/assets/css/settings.css';
import './assets/js/vendor/swiper/swiper.css';
import './assets/js/vendor/mediaelement/mediaelementplayer.min.css';
import './assets/js/vendor/mediaelement/wp-mediaelement.css';
import './assets/js/vendor/coverslider/css/style.css';
import './assets/js/vendor/testimonialcarousel/slick/slick.css';
import './assets/css/responsive.css';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { AuthProvider } from './Markup/context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <BrowserRouter>
    <AuthProvider>
   
 <App /> 
 </AuthProvider>
</BrowserRouter>
   
  
  </StrictMode>,
  
)
