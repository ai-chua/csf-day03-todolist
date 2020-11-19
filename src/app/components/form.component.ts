import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../model/task';
import { taskList } from '../model/tasklist'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = fb.group({
      description: fb.control(''),
      priority: fb.control(''),
      due: fb.control('')
    })
  }

  ngOnInit(): void {
  }

  addTask(){
    let task = new Task(
      this.taskForm.value.description,
      this.taskForm.value.priority,
      this.taskForm.value.due
    )
    console.info(typeof Task)
    taskList.push(task)
    console.log(task)
  }
}
