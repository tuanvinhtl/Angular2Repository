import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenGuard } from './core/guards/authen.guard';
import { PaginationModule } from 'ngx-bootstrap/pagination';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    PaginationModule.forRoot()
  ],
  providers: [AuthenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
