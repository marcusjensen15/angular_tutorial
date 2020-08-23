import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent} from './courses.component';
import { CourseComponent } from './course/course.component';


//all components must be listed under the 'AppComponent' within 'declarations' array seperated by a comma. 
// Also, make sure to import on the top 
//providers is where register all of the dependencies that these components are dependent upon.
//CoursesService must be registered, because CoursesComponent is dependent on it.
// If a bunch of components are dependent on the same provider, you only need to list it once. (Singleton Pattern)
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
