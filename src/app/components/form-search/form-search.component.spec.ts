import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormSearchComponent } from './form-search.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { RepositoryService } from '../../services/repository.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('FormSearchComponent', () => {
  let component: FormSearchComponent
  let fixture: ComponentFixture<FormSearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [ FormSearchComponent ],
      providers: [RepositoryService]
    })
    .compileComponents()

    fixture = TestBed.createComponent(FormSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})