import { Component, OnInit } from "@angular/core";
import { IDog } from "../IDog";
import { DogsService } from "../dogs.service";

@Component({
  selector: "app-dog-list",
  templateUrl: "./dog-list.component.html",
  styleUrls: ["./dog-list.component.css"]
})
export class DogListComponent implements OnInit {
  dogs: IDog[] = [];
  constructor(private dogService: DogsService) {
    dogService.all().subscribe(allDogs => {
      this.dogs = allDogs;
    });
  }

  getAll(): IDog[] {
    return this.dogs;
  }
  ngOnInit() {}
}
