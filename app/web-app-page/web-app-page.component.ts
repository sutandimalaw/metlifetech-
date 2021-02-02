import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MetlifeCoreService } from 'projects/metlife-core/src/public-api';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-web-app-page',
  templateUrl: './web-app-page.component.html',
  styleUrls: ['./web-app-page.component.css']
})
export class WebAppPageComponent implements OnInit, OnDestroy {
  isLoadingData = false;
  content: any;
  section: any = {
    firstSection: {},
    secondSection: {},
    thirdSection: {},
    fourthSection: {}
  };
  destroyer$ = new Subject<any>();

  constructor(
    private readonly coreService: MetlifeCoreService
  ) { }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    this.isLoadingData = true;
    this.coreService.getContent({
      type: 'web-application',
      dataSource: 'mock'
    })
    .pipe(
      takeUntil(this.destroyer$)
    )
    .subscribe((data) => {
      this.isLoadingData = false;
      if (!data.success) {
        return;
      }

      this.content = data.data;

      if (this.content.section && this.content.section.length > 0) {
        this.content.section.forEach(section => {
          if (this.section[section.id]) {
            this.section[section.id] = section;
          }
        });
      }
    });
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
    this.destroyer$.next(true);
    this.destroyer$.complete();
  }

}
