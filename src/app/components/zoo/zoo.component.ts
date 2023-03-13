import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
    selector: 'app-zoo',
    templateUrl: './zoo.component.html',
    styleUrls: ['./zoo.component.scss']
})
export class ZooComponent {
    animals:Animal[] = [{ name: 'simba',age:3 }, { name: 'mufasa',age:5 }, { name: 'scar',age:18 }]
    change1(newAge:Animal){
        console.log(newAge)
    }
}
