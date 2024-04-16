import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/data/interfaces/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users$!: Observable<User[]>;
}
