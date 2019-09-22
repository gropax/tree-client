import { Component, OnInit, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'bgr-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {

  @Input() loading: Observable<boolean>;

  private loadingSubject = new BehaviorSubject(false);
  private loading$ = this.loadingSubject.asObservable();

  constructor() { }

  ngOnInit() {
    if (this.loading)
      this.loading.subscribe(b => this.loadingSubject.next(b));
  }

}
