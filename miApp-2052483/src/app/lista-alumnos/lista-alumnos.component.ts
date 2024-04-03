import { Component, OnInit, numberAttribute } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {}

  async presentActionSheet(name: string) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => {
            this.delFav(name);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  alumnos : any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

  favoritos : any = [];

  addFav(nombre: string): void{

    this.favoritos.push(nombre);
    alert(nombre + " se ha agregado correctamente a favoritos");

  }

  delFav(nombre: string): void{

    var index : number = this.favoritos.indexOf(nombre, 0);
    delete(this.favoritos[index]);

    alert(nombre + " ha sido eliminado de favoritos");
  }

}
