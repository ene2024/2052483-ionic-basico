import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.scss'],
})
export class ProductosDetalleComponent  implements OnInit {

  constructor(private consultaService: ConsultaService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.idProducto);
    this.realizarConsultaDetalle(this.idProducto);
  }

  idProducto: string = this.route.snapshot.params['id'];

  producto: any = {};

  realizarConsultaDetalle(idProducto: string){
    this.consultaService.getProductoDetalle(idProducto).subscribe(
      (resp: object) => {
        console.log(resp);
        this.producto = resp as any;
      }
    )
  }

}
