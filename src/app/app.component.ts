import { Component, AfterViewChecked, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewChecked, OnInit {
  ngOnInit(): void {

  }
  constructor(private elementRef: ElementRef) {

  }
  ngAfterViewChecked() {
    var existsScript = document.getElementById("customJS");
    if (existsScript != null) {
      this.elementRef.nativeElement.removeChild(existsScript);
    }
    else {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "../assets/js/custom.js";
      s.id = "customJS";
      this.elementRef.nativeElement.appendChild(s);
    }
  }

}
