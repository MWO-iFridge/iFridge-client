import { Component, OnInit } from '@angular/core';
import { RestApiService } from  '../services/rest-api.service';


@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.scss']
})
export class HiddenComponent implements OnInit {

  private response: String = "";
  private BACKEND_URL = "http://127.0.0.1:8080";
  constructor(private api: RestApiService) { }

  ngOnInit() {
    this.api.getHidden().subscribe(data => this.response = data);
  }

}
