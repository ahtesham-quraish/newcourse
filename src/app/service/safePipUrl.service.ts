import { Component, OnInit, Input, Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";


@Pipe({ name: 'safeUrl'})
export class SafeUrlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    console.log(this.sanitized.bypassSecurityTrustHtml(value))
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }
}