import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ListModule } from './list/list.module';
import { DetailModule } from './detail/detail.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MyInterceptor} from './my-interceptor';
const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: ListComponent
  }, 
  {
    path:'',
    component: HomeComponent,
  }, 
  {
    path: 'list/:id',
    component: DetailComponent
  } 
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

    MatToolbarModule,
    HomeModule,
    ListModule,
    DetailModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:MyInterceptor,
    multi:true
  }
  ],
  // exports:[LogoComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
