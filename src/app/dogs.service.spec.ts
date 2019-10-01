import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { DogsService } from "./dogs.service";

describe("DogsService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: []
    })
  );

  it("should be created", () => {
    const service: DogsService = TestBed.get(DogsService);
    expect(service).toBeTruthy();
  });

  // "id": "7TwT8TQH0crmtgBDtL",
  // "name": "season 5 kiss GIF by Gotham",
  // "thumbnail": "https://media0.giphy.com/media/7TwT8TQH0crmtgBDtL/100.gif",
  // "image": "https://media0.giphy.com/media/7TwT8TQH0crmtgBDtL/giphy.gif"

  it("get", done => {
    const service: DogsService = TestBed.get(DogsService);
    service.get("7TwT8TQH0crmtgBDtL").subscribe(dog => {
      expect(dog.name).toBe("season 5 kiss GIF by Gotham");
      done();
    });
  });

  it("all", done => {
    const service: DogsService = TestBed.get(DogsService);
    // service.onDataLoad().subscribe(data => {
    service.all().subscribe(dogs => {
      expect(dogs.length).toBeGreaterThan(0);
      done();
    });
    // });
  });
});
