import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTasksItemsComponent } from './all-tasks-items.component';

describe('AllTasksItemsComponent', () => {
  let component: AllTasksItemsComponent;
  let fixture: ComponentFixture<AllTasksItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTasksItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTasksItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
