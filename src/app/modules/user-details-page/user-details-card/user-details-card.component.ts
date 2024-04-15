import { Component, Input } from '@angular/core';
import { User } from 'src/app/data/interfaces/user';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  styleUrls: ['./user-details-card.component.scss']
})
export class UserDetailsCardComponent {
  @Input() user: User | undefined;
}
