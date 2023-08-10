import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'form', component: FormularioComponent},
  {path: 'mostrar', component: MostrarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
