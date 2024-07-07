import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandDialogComponent } from './island-dialog.component';

describe('IslandDialogComponent', () => {
  let component: IslandDialogComponent;
  let fixture: ComponentFixture<IslandDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IslandDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IslandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
