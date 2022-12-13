import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {map, Observable} from "rxjs";
import {Pastrie} from "../pastrie";

@Component({
  selector: 'app-pastrie-form',
  templateUrl: './pastrie-form.component.html',
  styleUrls: ['./pastrie-form.component.scss']
})
export class PastrieFormComponent implements OnInit {
  pastrieForm!: FormGroup;
  formPreview$!: Observable<Pastrie>;
  private ref: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.pastrieForm = this.formBuilder.group({
      ref: new FormControl(this.ref,[Validators.required,Validators.minLength(4)]) ,
      name: [null],
      description: [null],
      quantity: [null],
      order: [null],
      url: [null]
    }, {
      updateOn:'change'
    });

   this.formPreview$ = this.pastrieForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        tags: [],
        like: ""
      }))
    );
  }
  onSubmitForm() {
    console.log(this.pastrieForm.value);
  }
}
