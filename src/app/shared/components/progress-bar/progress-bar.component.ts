import { Component } from '@angular/core';
import { ProgressService } from 'src/app/core/services/progress.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  showProgress: boolean = false;

  constructor(private progressService: ProgressService) { }

  ngOnInit() {
    this.progressService.progressVisible$.subscribe(
      (visible: boolean) => (this.showProgress = visible)
    );
  }
}
