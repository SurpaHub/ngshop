import { Component, OnInit, Input } from "@angular/core";
import { IDog } from "../IDog";

@Component({
  selector: "app-dog",
  templateUrl: "./dog.component.html",
  styleUrls: ["./dog.component.css"]
})
export class DogComponent implements OnInit {
  // id: string;
  // name: string;
  // thumbnail: string;
  // image: string;
  @Input()
  properties: IDog = {
    name: "",
    id: "",
    thumbnail: "",
    image: ""
  };

  isFavorite: boolean = false;
  likes: number = 0;

  constructor() {}

  like(): void {
    this.likes++;
  }

  favorite(): void {
    this.isFavorite = true;
  }

  ngOnInit() {}
}
