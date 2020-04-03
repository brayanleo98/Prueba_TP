import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { EmpleadoComponentComponent } from './components/empleado-component/empleado-component.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';
import { NavComponent } from './components/nav/nav.component';
import { PlacescomponentComponent } from './components/placescomponent/placescomponent.component';

const appRoutes: Routes = [
  { path: '', component: RegistrarEmpleadoComponent},
  { path: 'registrarempleados', component: RegistrarEmpleadoComponent},
  { path: 'empleadoscomponent', component: EmpleadoComponentComponent},
  { path: 'placescomponent', component: PlacescomponentComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponentComponent,
    RegistrarEmpleadoComponent,
    NavComponent,
    PlacescomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
