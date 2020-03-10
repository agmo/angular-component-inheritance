import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected constructor() {
  }

  abstract doSomething(): void;

  log() {
    console.info('Loggin from BaseService');
  }
}
