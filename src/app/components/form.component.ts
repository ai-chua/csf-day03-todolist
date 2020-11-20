import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../model/task';
import { taskList } from '../model/tasklist'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  taskForm: FormGroup;
  tomorrow = new Date();

  constructor(private fb: FormBuilder) {
    this.taskForm = fb.group({
      description: fb.control('', [ Validators.required ]),
      priority: fb.control('', [ Validators.required ]),
      due: fb.control('', [ Validators.required ])
    })
    this.tomorrow.setDate(this.tomorrow.getDate() +1);
  }

  ngOnInit(): void {
  }
  
  resetForm(){
    this.taskForm.reset()
  }

  addTask(){
    let task = new Task(
      this.taskForm.value.description,
      this.taskForm.value.due,
      this.taskForm.value.priority
    )
    taskList.push(task);
    console.log(task)
    this.taskForm.get('description').reset()
    this.taskForm.get('due').reset()
    this.taskForm.get('priority').reset()
  }
}
