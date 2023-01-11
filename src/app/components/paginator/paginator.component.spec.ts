import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PaginatorComponent } from './paginator.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { RepositoryService } from '../../services/repository.service';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent
  let fixture: ComponentFixture<PaginatorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [ PaginatorComponent ],
      providers: [RepositoryService]
    })
    .compileComponents()

    fixture = TestBed.createComponent(PaginatorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})