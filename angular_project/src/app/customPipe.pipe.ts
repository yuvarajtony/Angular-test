import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'customePipe'
})

export class customePipe implements PipeTransform{
    transform(value: number, exponent = 1): number {
        return Math.pow(value, exponent);
    }
}


