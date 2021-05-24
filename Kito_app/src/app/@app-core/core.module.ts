import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, AccountService, GlobalService, ChabadService, EventsService, MatchUsersService, FoodService, OrderService, VaticanService } from './http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IntercepterService } from './http-interceptor';
import { API_URL } from './http/@http-config';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment.prod';
import { GlobalErrorHandler } from './GlobalErrorHandler';
import { ConnectivityService } from './utils/connectivity.service';
import { DateTimeService, LoadingService, ToastService } from './utils';
import { HistoryService } from './http/history';
import { DioceseService } from './http/diocese';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders<unknown> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: API_URL, useValue: environment.apiUrl },
        { provide: HTTP_INTERCEPTORS, useClass: IntercepterService, multi: true },
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        AuthService,
        StorageService,
        AccountService,
        EventsService,
        GlobalService,
        ConnectivityService,
        ChabadService,
        LoadingService,
        DateTimeService,
        MatchUsersService,
        HistoryService,
        FoodService,
        ToastService,
        OrderService,
        DioceseService,
        VaticanService
      ]
    };
  }
}
