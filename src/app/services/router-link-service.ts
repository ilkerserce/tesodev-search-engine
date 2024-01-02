import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterLinkService {

  constructor(private router: Router) { }

  redirectRouterLink(routerLinkUrl: string) {
    this.router.navigate([routerLinkUrl])
  }
}
