import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'convertDurationPipe'})
export class ConvertDurationPipe implements PipeTransform {
    transform(duration: number): string {
        let hr = 0;
        let min = 0;
        let sec = 0;
        let day = 0;

        while (duration >= 1000) {
            duration = (duration - 1000);
            sec = sec + 1;
            if (sec >= 60) min = min + 1;
            if (sec == 60) sec = 0;
            if (min >= 60) hr = hr + 1;
            if (min == 60) min = 0;
            if (hr >= 24) {
                hr = (hr - 24);
                day = day + 1;
            }
        }

        console.log('duration ' + duration);
        console.log('hr ' + hr);
        console.log('min ' + min);
        console.log('sec ' + sec);
        console.log('day ' + day);

        return min + ":" + sec;
    }
}