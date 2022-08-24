import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { TravelModel, TravelStatus } from '../../models/travel.model';
import { TravelCardComponent } from './travel-card.component';

describe('TravelCardComponent', () => {
  let component: TravelCardComponent;
  let fixture: ComponentFixture<TravelCardComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelCardComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelCardComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  describe('when travel is defined', () => {
    const travel = TravelModel.fromDTO({
      id: '1',
      name: 'Travel name',
      description: 'Travel description',
      status: TravelStatus.NEW,
      createdDate: '2022-01-01',
      updatedDate: '2022-03-01',
    });

    beforeEach(() => {
      component.travel = travel;
      fixture.detectChanges();
    });

    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('should contain travel name', () => {
      const name = nativeElement.querySelector('.card-name');
      expect(name?.textContent).toEqual('Travel name');
    });

    it('should contain travel description', () => {
      const description = nativeElement.querySelector('.card-description');
      expect(description?.textContent?.trim()).toEqual('Travel description');
    });

    it('should contain travel created date', () => {
      const date = nativeElement.querySelector('.card-date');
      expect(date?.textContent?.trim()).toEqual('January 1, 2022');
    });

    it('should contain edit button', () => {
      const editBtn = nativeElement.querySelector('.card-edit-btn');
      expect(editBtn).toBeTruthy();
    });

    it('should emit "editTravel" event when pressing edit button', () => {
      let editedTravel: TravelModel | undefined;
      component.editTravel.pipe(first()).subscribe((data) => {
        editedTravel = data;
      });
      const editBtn = nativeElement.querySelector(
        '.card-edit-btn'
      ) as HTMLElement;
      editBtn.click();
      expect(editedTravel).toBe(travel);
    });

    it('should contain delete button', () => {
      const deleteBtn = nativeElement.querySelector('.card-delete-btn');
      expect(deleteBtn).toBeTruthy();
    });

    it('should emit "deleteTravel" event when pressing delete button', () => {
      let deletedTravel: TravelModel | undefined;
      component.deleteTravel.pipe(first()).subscribe((data) => {
        deletedTravel = data;
      });
      const deleteBtn = nativeElement.querySelector(
        '.card-delete-btn'
      ) as HTMLElement;
      deleteBtn.click();
      expect(deletedTravel).toBe(travel);
    });
  });

  describe('when travel is not defined', () => {
    it('should throw error', () => {
      expect(() => fixture.detectChanges()).toThrowError();
    });
  });
});
