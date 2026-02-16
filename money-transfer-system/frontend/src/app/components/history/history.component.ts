import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { forkJoin } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyPipe],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  transactions: any[] = [];
  currentAccountId: number | null = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    // Fetch both current account and transactions
    forkJoin({
      account: this.api.getAccount(),
      history: this.api.getHistory()
    }).subscribe({
      next: (result) => {
        this.currentAccountId = result.account.id;
        console.log("HISTORY DATA:", result.history);
        console.log("CURRENT ACCOUNT:", result.account);
        
        // Enrich transactions with direction and other party info
        const enrichedTransactions = result.history.map((tx: any) => ({
          ...tx,
          direction: tx.fromAccountId === this.currentAccountId ? 'sent' : 'received',
          otherPartyName: tx.fromAccountId === this.currentAccountId 
            ? tx.toAccountHolderName 
            : tx.fromAccountHolderName,
          otherPartyId: tx.fromAccountId === this.currentAccountId 
            ? tx.toAccountId 
            : tx.fromAccountId
        }));
        
        this.transactions = enrichedTransactions.sort((a: any, b: any) =>
  new Date(b.createdOn).getTime() -
  new Date(a.createdOn).getTime()
);

      },
      error: (err) => {
        console.error('Error fetching history:', err);
      }
    });
  }
}