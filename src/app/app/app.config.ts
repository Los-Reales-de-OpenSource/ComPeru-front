import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
// Firebase imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const firebaseConfig = {
  apiKey: "AIzaSyDbSFCQwfjT26mt93CnqKVbUbPIG49ADHM",
  authDomain: "user-authentication-comperu.firebaseapp.com",
  projectId: "user-authentication-comperu",
  storageBucket: "user-authentication-comperu.appspot.com",
  messagingSenderId: "746735002064",
  appId: "1:746735002064:web:375cbc69df80cdc5ced9d5"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
              provideHttpClient(),
              importProvidersFrom([
                provideFirebaseApp(() => initializeApp(firebaseConfig)),
                provideAuth(()=> getAuth()),
                ]), provideAnimationsAsync(),
              ],
//   providers: [provideRouter(routes), provideHttpClient()],
};
