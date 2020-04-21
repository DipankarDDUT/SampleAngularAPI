import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
photos;
albumId;
  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.albumId=this.route.snapshot.params.albumId;
    this.photos=this.photosService.getPhotos(this.albumId);
    // we clearly need an album id which we can get from the query params in the link. To get access to the params we need to install 
    // ActivatedRoute from @angular/router and this we alsoneed to inject in the constructor.
    // When it’s ready we can initialize another property albumId below the photos property. 
    // In the ngOnInit() method let’s assign the id from the URL to this.albumId and let’s pass it to the API URL.

  }

}
