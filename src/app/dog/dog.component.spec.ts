import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DogComponent } from "./dog.component";

describe("DogComponent", () => {
  let component: DogComponent;
  let fixture: ComponentFixture<DogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("likes", () => {
    component.likes = 0;
    component.like();
    expect(component.likes).toBe(1);
  });

  it("favorite", () => {
    component.isFavorite = false;
    component.favorite();
    expect(component.isFavorite).toBe(true);
  });
});
