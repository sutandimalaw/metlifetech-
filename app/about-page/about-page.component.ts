import { Component, OnInit, OnDestroy } from '@angular/core';
import { MetlifeCoreService } from 'projects/metlife-core/src/public-api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit, OnDestroy {
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
    this.isLoadingData = true;
    this.coreService.getContent({
      type: 'about',
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
    this.destroyer$.next(true);
    this.destroyer$.complete();
  }

}
