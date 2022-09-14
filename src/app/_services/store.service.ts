import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private firstName = faker.name.firstName();
  private lastName = faker.name.lastName();

  public iframeUrl = 'https://';
  public campaignId = '622a3e3a3f46e18fa97f8621';
  public email = faker.internet.email(this.firstName,this.lastName, 'preview.amplifique.me').toLowerCase();
  public name = `${this.firstName} ${this.lastName} (Teste Preview In App)`

}
