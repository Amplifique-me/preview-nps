import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private firstName = faker.name.firstName();
  private lastName = faker.name.lastName();

  public iframeUrl = 'https://';
  public campaignId = '6470ff4b674d4cf042e97d47';
  public email = faker.internet.email(this.firstName,this.lastName, 'preview.amplifique.me').toLowerCase();
  public name = `${this.firstName} ${this.lastName} (Teste Preview In App)`

}
