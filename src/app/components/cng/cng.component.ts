import { Component } from '@angular/core';
import { SampService } from 'src/app/services/samp.service';

@Component({
    selector: 'app-cng',
    templateUrl: './cng.component.html',
    styleUrls: ['./cng.component.scss']
})
export class CngComponent {
    constructor(private samp: SampService) {

    }
    plus() {
        this.samp.plus()
    }
    minus() {
        this.samp.minus()
    }
}
