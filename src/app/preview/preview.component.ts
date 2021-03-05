import {Component, OnInit} from '@angular/core';
import {StoreService} from '../_services/store.service';
import {AmpNpsService} from '@amplifique.me/ngx-amplifiqueme';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  constructor(
    public store: StoreService,
    public ampNpsSurvey: AmpNpsService
  ) {}

  ngOnInit(): void {

    this.showNpsSurvey();
  }

  showNpsSurvey() {
    this.ampNpsSurvey.setData({
      email: this.store.email,
      name: this.store.name,
      created_at: new Date(),
      campaign: this.store.campaignId,
    });

    this.ampNpsSurvey.run();
  }
}
