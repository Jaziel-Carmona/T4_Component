import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PaginaComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [PaginaComponent]
})
export class ComponentsModule { }
