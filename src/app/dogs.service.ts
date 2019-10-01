import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IDog } from "./IDog";
import jsonData from "./dogdata.json";

@Injectable({
  providedIn: "root"
})
export class DogsService {
  private dogData: IDog[] = [];

  constructor() {
    this.dogData = jsonData;
  }

  get(id: string): Observable<IDog> {
    return of(this.dogData.find(dog => dog.id === id));
  }

  all(): Observable<IDog[]> {
    return of(this.dogData);
  }
}
