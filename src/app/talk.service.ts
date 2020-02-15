import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {StringDto} from './StringDto';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<string[]>{
    return this.httpClient.get<string[]>(environment.API_LIST);
  }

  getHostname(): Observable<StringDto>{
    return this.httpClient.get<StringDto>(environment.API_HOSTNAME);
  }

  callShutdown(): Observable<StringDto> {
    return this.httpClient.get<StringDto>(environment.API_SHUTDOWN);
  }
}
