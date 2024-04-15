import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/data/interfaces/user';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss']
})
export class UserDetailsPageComponent {
  userId: string | null = null;
  user: User = {
    id: '4',
    email: 'hi@gmail.com',
    first_name: 'John',
    last_name: 'Doe',
    avatar: 'https://reqres.in/img/faces/4-image.jpg'
  }
  
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
