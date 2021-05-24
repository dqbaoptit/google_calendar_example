import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './@app-core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './@app-core/auth-guard.service';
import { Camera } from '@ionic-native/camera/ngx';
import { SlideService } from './@modular/slide/slide.service';
import { Stripe } from '@ionic-native/stripe/ngx';
import {enableProdMode} from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx'
import { AudioManagement } from '@ionic-native/audio-management/ngx';
import { AudioManagerService, CameraService, GeolocationService, OneSignalService, SpeechRecognitionService } from './@app-core/utils';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
// import { IonicSwipeAllModule } from 'ionic-swipe-all';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    CoreModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    StatusBar,
    SlideService,
    Stripe,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthGuard,
    Camera,
    CameraService,
    SpeechRecognition,
    SpeechRecognitionService,
    AudioManagement,
    AudioManagerService,
    OneSignal,
    OneSignalService,
    Geolocation,
    GeolocationService,
    NativeGeocoder,
    NativePageTransitions,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
