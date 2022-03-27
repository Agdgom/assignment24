import { User } from '../app.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
})
export class Task1Component implements OnInit {
  loading: boolean = false;
  loaded: boolean = false;

  users: User[] = [
    {
      name: 'Giorgi',
      lastname: 'Bazerashvili',
      about: 'About',
      birthDate: 1996,
      status: 'Detected',
    },
    {
      name: 'Kote',
      lastname: 'Kirkitadze',
      about: 'About',
      birthDate: 1999,
      status: 'Active',
    },
    {
      name: 'Besarion',
      lastname: 'Gagelidze',
      about: 'About',
      birthDate: 1995,
      status: 'Inactive',
    },
  ];

  constructor() {}

  ngOnInit() {}

  loadUsers() {
    this.loading = true;

    setTimeout(() => {
      this.loaded = true;
      this.loading = false;
    }, 2000);
  }
}
