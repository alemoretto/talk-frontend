import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TalkService} from './talk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'talk-frontend';

  constructor(private service: TalkService) {
  }

  list: BehaviorSubject<string[]> = new BehaviorSubject([]);
  // hostname: BehaviorSubject<StringDto> = new BehaviorSubject(new StringDto());
  hostname: string;
  shutdown: string;

  ngOnInit(): void {

    // this.service.getList().subscribe(rs => {
    //   this.list.next(rs);
    // });

    this.service.getHostname().subscribe(rs => {
      this.hostname = rs.value;
    });

  }

  callShutdown() {
    this.service.callShutdown().subscribe(rs =>
      this.shutdown = rs.value
    );
  }

  ngOnDestroy(): void {
    this.list.unsubscribe();
  }


}

