import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TalkService} from './talk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'talk-frontend';

  constructor(private service: TalkService) {
  }

  list: BehaviorSubject<string[]> = new BehaviorSubject([]);

  ngOnInit(): void {

    this.service.getList().subscribe(rs => {

      this.list.next(rs);

    });

  }


}

