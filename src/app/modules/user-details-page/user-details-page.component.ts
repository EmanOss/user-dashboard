import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/data/interfaces/user';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss']
})
export class UserDetailsPageComponent {
  userId: string | null = null;

  user!: User;

  constructor(private route: ActivatedRoute, private userService: UserService) { }
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.userService.getUserById(this.userId
      ).subscribe((user) => {
        this.user = user;
      });
    }
  }
}
