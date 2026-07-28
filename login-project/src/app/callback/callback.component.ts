import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
 selector: 'app-callback',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent implements OnInit {
  private auth = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    const params = this.route.snapshot.queryParamMap;
    const hasCallbackParams = params.has('code') && params.has('state');

    if (!hasCallbackParams) {
      // Someone navigated here directly — nothing to process
      this.router.navigate(['/login']);
      return;
    }

    // Real callback: also guard against the token exchange itself failing
    this.auth.error$.pipe(take(1)).subscribe((error) => {
      if (error) {
        this.router.navigate(['/login']);
      }
    });
  }
}