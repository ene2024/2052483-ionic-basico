import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './productos.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProductosComponent
  ],
  declarations: [ProductosComponent]
})
export class ProductosComponentModule {}