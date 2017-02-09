import { Component } from '@angular/core';

import { User }    from './user';

@Component({
  moduleId: module.id,
  selector: 'user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new User(18, 'Dr IQ', 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newUser() {
    this.model = new User(42, '', '');
  }

  // skyDog(): User {
  //   let myUser =  new User(42, 'SkyDog',
  //                          'Fetch any object at any distance',
  //                          'Leslie Rollover');
  //   console.log(myUser.name); // "My hero is called SkyDog"
  //   return myUser;
  // }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

}