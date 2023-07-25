import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  rutas = [
    {
      nombre: 'Nuestra Iglesia',
      url: '/iglesia'
    },
    {
      nombre: 'Congregaciones ',
      url: '/congregaciones'
    },
    {
      nombre: 'Multimedia',
      url: '/multimedia'
    },
    {
      nombre: 'Recursos',
      url: '/recursos'
    },
    {
      nombre: 'Contacto',
      url: '/contacto'
    },
  ]

  constructor() { }
  ngOnInit(): void {
  }


}