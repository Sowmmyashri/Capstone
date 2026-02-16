import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './transfer.component.html',
  styleUrl:'./transfer.component.css',
})
export class TransferComponent {
  toAccount = '';
  amount = 0;

  constructor(private api: ApiService) { }

 transfer() {
  this.api.transfer({
    toAccount: this.toAccount,
    amount: this.amount
  }).subscribe({
    next: (res: any) => {
      if (res.status === 'SUCCESS') {
        alert('Transfer successful');
      } else {
        alert(res.message);  
      }
    },
    error: (err) => {
      alert(err.error?.message || 'Transfer failed'); // backend error
    }
  });
}

}
