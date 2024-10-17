import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { TaskService, ITask } from '../../../../services/tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  @Output() close = new EventEmitter<void>();

  taskForm: FormGroup;
  selectedFile: File | null = null;

  formFields = [
    { label: 'Title', type: 'text', controlName: 'title', validators: [Validators.required] },
    { label: 'Text', type: 'textarea', controlName: 'text', validators: [Validators.required] },
    { label: 'Upload Image', type: 'file', controlName: 'image' },
    { label: 'Completed', type: 'checkbox', controlName: 'completed' }
  ];

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      image: [''],
      completed: [false]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile);

      const reader = new FileReader();
      reader.onload = () => {
        this.taskForm.patchValue({ image: reader.result as string });
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: ITask = {
        ...this.taskForm.value,
        id: this.taskService.tasks.length + 1,
        image: this.taskForm.value.image
      };

      this.taskService.tasks.push(newTask);
      this.closeModal();
    }
  }

  closeModal(): void {
    this.close.emit();
  }
}
