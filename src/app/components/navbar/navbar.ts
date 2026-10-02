import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  activeIndex:number = 0;

  changeActive(index:number){
    this.activeIndex = index
  }

  scrollB:boolean = false;
  @HostListener('window:scroll',[])
   scrolled() {
    this.scrollB = window.scrollY > 5
  }
} 
