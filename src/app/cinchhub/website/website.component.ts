declare var jquery:any;
declare var $ :any;
import * as jQuery from 'jquery';
import {WindowRef} from '../../service/windowref.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  closeResult: string;
  public isCollapsed = true;
  constructor(private wind: WindowRef , private router : Router, private modalService: NgbModal) { }

  ngOnInit() {
    setTimeout(() => {
      this.wind.nativeWindow.initIndexJs();
      this.wind.nativeWindow.initFlexSlider();
    }, 1);
  }
  openCourse(){
    this.router.navigate(['courses']);
  }

  open(contactForm) {
    this.modalService.open(contactForm, { windowClass: 'modal-large' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  show(videoForm) {
    this.modalService.open(videoForm, { windowClass: 'modal-large' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
