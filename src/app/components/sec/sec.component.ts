import { Component, OnInit,OnDestroy } from '@angular/core';
import { SampService } from '../../services/samp.service';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sec',
  templateUrl: './sec.component.html',
  styleUrls: ['./sec.component.scss']
})
export class SecComponent implements OnInit,OnDestroy {
    ngOnInit(): void { }
    title = 'app';
    subs = new Subscription();

    count$: Observable<number>;

    constructor(private samp: SampService) {
        this.count$ = this.samp.counter$
    }
    
    ngOnDestroy(): void {
        this.subs.unsubscribe();
      }
    
}
