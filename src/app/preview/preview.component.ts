import { Component, OnInit } from '@angular/core';
import { StoreService } from '../_services/store.service';
import { AmpCfService } from '@amplifique.me/ngx-amplifiqueme';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  showIframe = false;
  survey = this.store.campaignId;
  constructor(
    public store: StoreService,
    public ampCfSurvey: AmpCfService,
    public router: Router,
    public route: ActivatedRoute
  ) {}


  ngOnInit(): void {

    if (this.route.snapshot.params.survey) {
      this.survey = this.route.snapshot.params.survey;
      this.showIframe = false;
      setTimeout(()=>this.showNpsSurvey(), 1000)
    } else {
      if (this.store.iframeUrl.length != 0) {
        this.showIframe = true;
      }
    }

    // this.showNpsSurvey();
  }

  showNpsSurvey() {
    console.log('a');
    this.ampCfSurvey.setData({
      email: this.store.email,
      name: this.store.name,
      survey: this.survey,
      created_at: new Date().getTime(),
      force:true
    });

    this.ampCfSurvey.run();
  }
}
