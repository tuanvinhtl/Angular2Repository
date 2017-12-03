import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenGuard } from './core/guards/authen.guard';
import { ModalModule,TabsModule,PaginationModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),

  ],
  providers: [AuthenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
