import { Component, OnInit, ElementRef, ViewChild, Renderer2, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-acceso-dom',
  templateUrl: './acceso-dom.component.html',
  styleUrls: ['./acceso-dom.component.css']
})
export class AccesoDOMComponent implements OnInit {

  nombres = ['Pedro','Laura','Juan','Lucía'];
  @ViewChild('lista') listaRef: ElementRef;
  @ViewChildren('item') itemsRef: QueryList<any>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.listaRef.nativeElement.style.paddingLeft = '200px'; Acceso no buena practica
    this.renderer.setStyle(this.listaRef.nativeElement, 'padding-left', '200px'); // idem anterior más seguro
    console.log(this.itemsRef);
  }

  setDone(i: number) {
    this.itemsRef.forEach((elem: any, index: number) => {
      if(i === index) {
        this.renderer.setStyle(elem.nativeElement, 'text-decoration', 'line-through');
      }
    })
  }

}
