import { Component, Input } from '@angular/core';
import { User } from 'src/app/data/interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: User | undefined;
}
