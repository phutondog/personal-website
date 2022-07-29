import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.setTimeout(function () {
      document.getElementById('preload1')!.style.visibility = 'visible';
      document.getElementById('preload2')!.style.visibility = 'visible';
      document.getElementById('preload3')!.style.visibility = 'visible';

    }, 2500);
  }

  toggleAllIcons(){
    const elems = document.querySelectorAll('.icon');
    elems.forEach(el => {
      el.classList.toggle('active');
    })
  }


  hamClick($event: any) {
    let clickedElement = document.querySelector('.ham');
      // if a Button already has Class: .active
      // if (isCertainButtonAlreadyActive) {
      //   this.toggleAllIcons()
      //   isCertainButtonAlreadyActive.classList.remove("active");
      // } else{
    this.toggleAllIcons();

    console.log(clickedElement)


        clickedElement!.classList.toggle('active');
      }
    // }

  

}
