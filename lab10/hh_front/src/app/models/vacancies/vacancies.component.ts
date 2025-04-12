import { Component } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-vacancies',
  imports: [],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss'
})

export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: number; // ID
}

export class VacanciesComponent {

}
