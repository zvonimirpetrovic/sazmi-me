import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputUserDataComponent } from './input-user-data/input-user-data.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiServiceService } from '@service/api-service.service';
import { OutputSummaryDataComponent } from './output-summary-data/output-summary-data.component';

@NgModule({
  declarations: [
    AppComponent,
    InputUserDataComponent,
    OutputSummaryDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
