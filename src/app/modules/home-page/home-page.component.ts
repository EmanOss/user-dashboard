import { Component } from '@angular/core';
import { User } from 'src/app/data/interfaces/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  users: User[] = [{ id: '1', email: "george.bluth@reqres.in", first_name: "George", last_name: "Bluth", avatar: "https://reqres.in/img/faces/4-image.jpg" },
  { id: '2', email: "charles.morris@reqres.in", first_name: "George", last_name: "Bluth", avatar: "https://reqres.in/img/faces/6-image.jpg" },
  ]

}
