import { AfterViewInit, Component } from '@angular/core';

declare var $: any; // Declaración de jQuery

@Component({
  selector: 'app-quemsomos',
  templateUrl: './quemsomos.component.html',
  styleUrls: ['./quemsomos.component.css']
})
export class QuemsomosComponent implements AfterViewInit{


  ngAfterViewInit() {
    this.initScripts();
  }
  

  initScripts() {
    "use strict";

    
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 100);
    };
    spinner();

}
}
