import { Component, OnInit } from '@angular/core';
import {Auth} from '../../services/auth.service';
@Component({
  moduleId:'module.id',
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    constructor(private auth:Auth){
        
    }
  ngOnInit() {
  }

}
