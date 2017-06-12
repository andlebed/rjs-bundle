// import {HttpClient} from 'aurelia-fetch-client';
// import {HttpClient as Foo} from 'aurelia-http-client';
// import {ValidationEngine} from 'aurelia-validation';
// import {I18N} from 'aurelia-i18n';
// import {VirtualRepeat} from 'aurelia-ui-virtualization';
import 'regenerator-runtime';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-validation')
    .plugin('aurelia-plugins-google-recaptcha', config => {
      config.options({
        hl: 'en',
        siteKey: '6LcddxgTAAAAAMmkEMa1Vrp6TNcZG8kMMkcn-VCK'
      });
    })
    .feature('bootstrap-validation');
    // .plugin('aurelia-ui-virtualization')
    // .plugin('aurelia-i18n')
    // .plugin('aurelia-breeze');

  aurelia.start().then(() => aurelia.setRoot());
}
