import { Component,OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  albums;
  constructor(private photoservice:PhotosService){




  }
  ngOnInit(){
this.albums=this.photoservice.getAlbums();

  }
}
