import { Component } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-company',
  imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})

export interface Company {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
}

export class CompanyComponent {

}
