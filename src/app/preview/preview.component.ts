import { Component, OnInit } from '@angular/core';
import { StoreService } from '../_services/store.service';
import {
  AmpCfService,
  AmpSurveyService,
} from '@amplifique.me/ngx-amplifiqueme';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  showIframe = false;
  survey = this.store.campaignId;
  public version = 1;
  public identifier = '';
  constructor(
    public store: StoreService,
    public ampCfSurvey: AmpCfService,
    public ampSurveyService: AmpSurveyService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.params.survey) {
      this.showIframe = false;
      this.survey = this.route.snapshot.params.survey;
      this.version =  this.route.snapshot.queryParams.version || 1;
      this.identifier = this.route.snapshot.queryParams.identifier;
      if (this.version == 2) {
        //@ts-ignore
        this.ampSurveyService.load(this.identifier, 'true', 'false', 'true', this.survey).then(() => {
          this.ampSurveyService.identify(
            {
              email: this.store.email,
              name: this.store.name,
              created_at: new Date().getTime(),
            },
            false
          );
          setTimeout(()=>{
            this.ampSurveyService.run();

          },2000)
        });
      }else{
        setTimeout(() => this.showNpsSurvey(), 1000);
      }
    } else {
      if (this.store.iframeUrl.length != 0) {
        this.showIframe = true;
      }
    }

    // this.showNpsSurvey();
  }

  showNpsSurvey() {
    if(this.version == 1){

      console.log('a');
      this.ampCfSurvey.setData({
        email: this.store.email,
        name: this.store.name,
        survey: this.survey,
        created_at: new Date().getTime(),
        force: true,
      });

      this.ampCfSurvey.run();
    }else{
      if (this.version == 2) {
        this.ampSurveyService.load(this.identifier, 'true', 'false', 'true', this.survey).then(() => {
          this.ampSurveyService.identify(
            {
              email: this.store.email,
              name: this.store.name,
              created_at: new Date().getTime(),
            },
            false
          );
          setTimeout(()=>{
            this.ampSurveyService.run();

          },2000)
        });
      }else{
        setTimeout(() => this.showNpsSurvey(), 1000);
      }
    }
  }
}
