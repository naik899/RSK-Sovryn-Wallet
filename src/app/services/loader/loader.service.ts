import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  public showLoader() {
    document.getElementById("app").classList.add("filter");
    document.getElementById("loader").style.display = "block";
  }
  public hideLoader() {
    setTimeout(() => {
      document.getElementById("app").classList.remove("filter");
      document.getElementById("loader").style.display = "none";
    }, 500);
  }
}
