  import { Component } from '@angular/core';
  import {Company} from '../models/company/company.component';
  import {Vacancy} from '../models/vacancies/vacancies.component';
  import {ServicesComponent} from '../services/servives.component';
  import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-company-list',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})

export class CompanyListComponent {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompanyId: number | null = null;

  constructor(private companyService: ServicesComponent) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  showVacancies(company: Company): void {
    this.selectedCompanyId = company.id;
    this.companyService.getVacancies(company.id).subscribe(data => {
      this.vacancies = data;
    });
  }
}
