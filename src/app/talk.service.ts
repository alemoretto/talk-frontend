import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<string[]>{
    return this.httpClient.get<string[]>(environment.API + "/talk/list");
  }
}
