import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent{
  private auth = inject(AuthService);
  user = this.auth.user$;

  logout():void {
    this.auth.logout({
      logoutParams:{returnTo:window.location.origin}
    })
  }
}