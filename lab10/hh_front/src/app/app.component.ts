import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CompanyListComponent} from './company-list/company-list.component';
import {BrowserModule} from '@angular/platform-browser';
// @ts-ignore
import {HttpClientModule} from '@angular/common/module.d-CnjH8Dlt';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompanyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

@NgModule({
  declarations: [],
  imports: [BrowserModule, HttpClientModule, CompanyListComponent, AppComponent],
})

export class AppComponent {
  title = 'hh_front';
}
