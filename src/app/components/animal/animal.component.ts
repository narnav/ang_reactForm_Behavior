import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
    selector: 'app-animal',
    templateUrl: './animal.component.html',
    styleUrls: ['./animal.component.scss']
})
export class AnimalComponent {
    @Input() ani?: Animal
    @Output() change = new EventEmitter<Animal>();

    Birthday() {
        if (this.ani) {
            this.ani.age++
        }
        this.change.emit(this.ani);
    }
}
