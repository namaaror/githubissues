import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeTableComponent } from './prime-table/prime-table.component';

import { TableModule } from 'primeng/table';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { ApiBaseService } from './api-base.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrimeTableComponent,
    IssuesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule
  ],
  providers: [ApiBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
