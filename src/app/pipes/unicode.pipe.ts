import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'unicode'
})
export class UnicodePipe implements PipeTransform {
constructor(private _sanitizer: DomSanitizer){}
  transform(value: string, ...args: string[]) {
    return this._sanitizer.sanitize(SecurityContext.HTML, value)
  }

}
