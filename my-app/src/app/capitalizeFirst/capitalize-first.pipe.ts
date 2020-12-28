import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value === null || value === undefined) return 'Not assigned';
      return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
