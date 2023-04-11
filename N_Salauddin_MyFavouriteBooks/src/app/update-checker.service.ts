import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UpdateCheckerService {
  constructor(private updates: SwUpdate, private snackBar: MatSnackBar) { }

  public init() {
    if (this.updates.isEnabled) {
      this.updates.available.subscribe(() => {
        const snackBarRef = this.snackBar.open('Update available', 'Reload');
        snackBarRef.onAction().subscribe(() => {
          this.updates.activateUpdate().then(() => location.reload());
        });
      });

      this.updates.checkForUpdate();
    }
  }
}
