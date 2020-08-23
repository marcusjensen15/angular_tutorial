import { Component } from '@angular/core';

//selector:  <courses>. how it is referred to outside of class definition
//template: anywhere we have <courses>, it is going to render the template code.
// the double curly braces {{}} is used to render something in your template dynamically 
//if the value of title updates in the future, it will re-render automatically
// you can also write strings within the double curley braces.
// Double curleys are called 'string interpolation'


@Component({
    selector: 'courses', 
    template: '<h2>{{ "Title: " + getTitle() }}</h2>'
})
export class CoursesComponent {

    title = "List of Courses";
    courses = ['course1', 'course2', 'course3']

    getTitle() {
        return this.title
    }
}