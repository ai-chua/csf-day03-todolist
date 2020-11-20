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
  tomorrow = new Date();

  constructor(private fb: FormBuilder) {
    this.taskForm = fb.group({
      description: fb.control(''),
      priority: fb.control(''),
      due: fb.control('')
    })
    this.tomorrow.setDate(this.tomorrow.getDate() +1);
  }

  ngOnInit(): void {
  }

  addTask(){
    console.info(typeof this.taskForm.value.due)
    console.info(this.taskForm.value.due)
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
