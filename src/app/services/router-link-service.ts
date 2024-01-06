import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterLinkService {

  constructor(private router: Router) { }

  redirectRouterLink(routerLinkUrl: string, params?: any) {
    if (params) {
      this.router.navigate([routerLinkUrl], { queryParams: params });
    } else {
      this.router.navigate([routerLinkUrl]);
    }
  }
}
