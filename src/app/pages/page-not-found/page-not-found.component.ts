import { Component, OnInit } from '@angular/core';
import { TopbarService } from '../../bgr-resource/services/topbar.service';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private topbarService: TopbarService
  ) {
  }

  ngOnInit() {
    this.topbarService.setTitle("Error");
  }

}
