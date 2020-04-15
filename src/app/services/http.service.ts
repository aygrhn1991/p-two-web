import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Result } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  result: Result = new Result();

  constructor() { }

  login(account: string, password: string) {
    return of(this.result);
  }

}
