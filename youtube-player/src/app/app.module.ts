import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    HeaderComponent,
    VideoplayerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
