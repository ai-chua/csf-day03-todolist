import { Component, OnInit, Input } from '@angular/core';
import { taskList } from '../model/tasklist';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  // @Input() taskList = [];
  // 1. WRITE NEW METHOD TO ADD NEW TASK CARD W TASK
  // 2. ADD @IMPORT AND LISTEN FOR EVENT EMITTER
  
  constructor() { }

  ngOnInit(): void {
  }

  currentTasks = taskList

}
