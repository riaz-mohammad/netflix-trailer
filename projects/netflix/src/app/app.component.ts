import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import {  Router, RouterOutlet } from '@angular/router';
import { modalFadeIn } from './animations/modal-animation';
import { routeAnimations } from './animations/route-animations';
import { MoviePreviewService } from './services/movie-preview.service';
import { MoviesService } from './services/movies.service';
import { VideoIdService } from './services/video-id.service';
import { MediaNotFoundService } from './services/media-not-found.service';
import { mediaNotFound } from './animations/media-notfound-animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations, modalFadeIn, mediaNotFound],
})
export class AppComponent {
  public showModal!: boolean;
  constructor(
    public router: Router,
    private videoIdService: VideoIdService,
    private moviePreview: MoviePreviewService,
    private movieService: MoviesService,
    private user: UserService,
    private noMedia: MediaNotFoundService
  ) {}

  //video id Observable to pass to the trailer component in the template
  public trailerId = this.videoIdService.trailerKey$;
  //Movie or Show Object to pass to the info component in the template
  public movieInfo = this.moviePreview.preview$;
  // All media images url
  public movieImages = this.movieService.IMAGES;
  //If http request for movie/show return no result
  public noMediaFound = this.noMedia.error$;

  public onClosePlayer(): void {
    this.videoIdService.removeTrailer();
  }

  public onClosePreview(): void {
    this.moviePreview.closePreview();
  }

  get textToShow(): string {
    return this.router.url === '/' ? 'LOG IN' : 'LOG OUT';
  }

  public getRouteState(outlet: RouterOutlet): string {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  public get showOrHide(): boolean {
    return !(this.router.url === '/' || this.router.url == '/login');
  }

  public onShowModal(value: boolean): void {
    this.showModal = !this.showModal;
    value ? this.user.logoutUser() : null;
  }
}
