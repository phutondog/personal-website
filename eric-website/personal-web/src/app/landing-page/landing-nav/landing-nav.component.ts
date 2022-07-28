import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrls: ['./landing-nav.component.scss']
})
export class LandingNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.clearActive()
  }

  clearActive(){
    const elems = document.querySelectorAll('.bar');
    elems.forEach(el => {
      el.classList.remove("active");
    })
  }

  onButtonGroupClick($event: any) {
    let clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === "BUTTON") {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }
      this.clearActive()

      clickedElement.className += " active";
    }

  }

}
