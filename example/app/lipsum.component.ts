import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

import {PageScroll} from 'ng2-page-scroll';

@Component({
    templateUrl: './app/lipsum.component.html',
    directives: [PageScroll, NgFor]
})
export class LipsumComponent {
    array:number[] = [2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11]
}
