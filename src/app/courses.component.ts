import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

//selector:  <courses>. how it is referred to outside of class definition
//template: anywhere we have <courses>, it is going to render the template code.
// the double curly braces {{}} is used to render something in your template dynamically 
//if the value of title updates in the future, it will re-render automatically
// you can also write strings within the double curley braces.
// Double curleys are called 'string interpolation'
// you can use bacticks for string interpolation 
// every time you are using a directive that modifies the structure of the DOM, prefix with a *
// ngFor is a for loop iterating over an array of courses. each cell in the array is called a course
// you can define services in this case with a let variable, or you can 
//make it as a paramter within your constructor. by doing this there is a local copy of 
// CoursesServices instantied when a new CoursesComponent is. This way if CoursesServices
// Changes you don't need to make the change in a zillion places/ 

@Component({
    selector: 'courses', 
    template: `
        <h2>{{ "Title: " + getTitle() }}</h2>
            <ul>
                <li *ngFor = "let course of courses">
                    {{ course }}
                </li>
            </ul>
    `
})
export class CoursesComponent {

    title = "List of Courses";
    courses;

    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title
    }
}