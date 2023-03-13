import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SampService {

    private counterChanged = new BehaviorSubject<number>(3);
    counter$ = this.counterChanged.asObservable();

    constructor() { }
    plus() {
        this.counterChanged.next(this.counterChanged.value + 1);
        // console.log('PLUS', this.counterChanged.value);
      }
      minus() {
        this.counterChanged.next(this.counterChanged.value - 1);
        // console.log('MINUS', this.counterChanged.value);
      }
    
}
