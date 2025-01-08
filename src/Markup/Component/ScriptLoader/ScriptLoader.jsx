// ScriptLoader.js
import React, { useEffect } from 'react';

const ScriptLoader = () => {
  const scripts = [
    '../../../assets/js/vendor/jquery-3.1.1.js',
    '../../../assets/js/vendor/jquery-migrate.min.js',
    '../../../assets/js/vendor/photostack/modernizr.min.js',
    '../../../assets/js/vendor/superfish.js',
    '../../../assets/js/vendor/essential-grid/public/assets/js/lightbox.js',
    '../../../assets/js/vendor/essential-grid/public/assets/js/jquery.themepunch.tools.min.js',
    '../../../assets/js/vendor/essential-grid/public/assets/js/jquery.themepunch.essential.min.js',
    '../../../assets/js/vendor/revslider/public/assets/js/jquery.themepunch.revolution.min.js',
    '../../../assets/js/custom/_main.js',
    '../../../assets/js/custom/core.utils.js',
    '../../../assets/js/custom/core.init.js',
    '../../../assets/js/custom/template.init.js',
    '../../../assets/js/custom/template.shortcodes.js',
    '../../../assets/js/vendor/magnific/jquery.magnific-popup.min.js',
    '../../../assets/js/vendor/core.messages/core.messages.js',
    '../../../assets/js/vendor/testimonialcarousel/slick/slick.min.js',
    '../../../assets/js/vendor/coverslider/js/init.min.js',
    '../../../assets/js/vendor/swiper/swiper.js',
    '../../../assets/js/vendor/isotope.pkgd.min.js'
  ];

  useEffect(() => {
    scripts.forEach(script => {
      const scriptElement = document.createElement('script');
      scriptElement.src = script;
      scriptElement.async = true;
      document.body.appendChild(scriptElement);

      // Cleanup function
      return () => {
        document.body.removeChild(scriptElement);
      };
    });
  }, []);

  return null; // This component does not render anything to the DOM
};

export default ScriptLoader;
