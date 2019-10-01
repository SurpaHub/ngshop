import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DogListComponent } from "./dog-list.component";
import { DogComponent } from "../dog/dog.component";

describe("DogListComponent", () => {
  let component: DogListComponent;
  let fixture: ComponentFixture<DogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DogListComponent, DogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("getAll()", () => {
    component.dogs = [
      {
        id: "7TwT8TQH0crmtgBDtL",
        name: "season 5 kiss GIF by Gotham",
        thumbnail: "https://media0.giphy.com/media/7TwT8TQH0crmtgBDtL/100.gif",
        image: "https://media0.giphy.com/media/7TwT8TQH0crmtgBDtL/giphy.gif"
      }
    ];
    expect(component.getAll()).toBe(component.dogs);
  });

  it("should display all dogs", () => {
    //TODO get all of the text of the element / fixture
    let t = fixture.elementRef.nativeElement.innerText;
    //make sure that the text contains the name of the first dog in our data
    expect(t).toContain("relaxed bull dog GIF");
    //make sure that the text contains the name of the last dog in our data
    expect(t).toContain("Animated GIF");

    // "id": "4ziNJuYbfDius",
    // "name": "relaxed bull dog GIF",
    // "thumbnail": "https://media0.giphy.com/media/4ziNJuYbfDius/100.gif",
    // "image": "https://media0.giphy.com/media/4ziNJuYbfDius/giphy.gif"

    // "id": "PijxGiTyFKU8andhc4",
    // "name": "Animated GIF",
    // "thumbnail": "https://media0.giphy.com/media/PijxGiTyFKU8andhc4/100.gif",
    // "image": "https://media0.giphy.com/media/PijxGiTyFKU8andhc4/giphy.gif"
  });
});
