// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : { // Se está usando el del correo pagapp
    apiKey: "AIzaSyAJMuFY0ye_R2Npr6yaYNfkEWLmjllUeFw",
    authDomain: "tsappeo.firebaseapp.com",
    projectId: "tsappeo",
    storageBucket: "tsappeo.appspot.com",
    messagingSenderId: "877182790363",
    appId: "1:877182790363:web:6583bec0c77ce9b3d9bafe"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
