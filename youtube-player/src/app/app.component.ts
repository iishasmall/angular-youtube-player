import { Component } from '@angular/core';
import { GetPlaylistService } from './service/get-playlist.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  providers: [GetPlaylistService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: any;
  searchtopic: any;
  constructor(private playerService: GetPlaylistService, private sanitizer: DomSanitizer) {
    this.initData();
  }

  initData() {
    this.playerService.getTopic().subscribe(data =>
      this.parseJSON(data)
    )
  }

  getEmbedURL(item) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.contentDetails.videoId);
  }

  parseJSON(data: any) {
    this.items = data.items

  }


}
