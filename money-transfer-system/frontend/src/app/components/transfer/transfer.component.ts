import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './transfer.component.html'
})
export class TransferComponent {
  toAccount = '';
  amount = 0;

  constructor(private api: ApiService) { }

  transfer() {
    this.api.transfer({
      toAccount: this.toAccount,
      amount: this.amount
    }).subscribe(() => {
      alert('Transfer successful');
    });
  }
}
