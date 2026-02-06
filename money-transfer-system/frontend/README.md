# Frontend (Angular)

This folder is intended for the Angular SPA described in the project specification.

## Setup

1. Install Node.js (LTS) and Angular CLI:

```bash
npm install -g @angular/cli
```

2. Inside this `frontend` folder, create the Angular project:

```bash
cd frontend
ng new money-transfer-ui --routing --style=scss
```

3. Inside the generated `money-transfer-ui` project, create the following core pieces:

- `AuthService` with `login`, `logout`, `isAuthenticated`, `getToken`
- `AccountService` with `getAccount`, `getBalance`, `getTransactions`
- `TransferService` with `transfer`
- Components: `LoginComponent`, `DashboardComponent`, `TransferComponent`, `HistoryComponent`
- HTTP interceptor to attach the Basic/JWT auth header to `/api/**` calls

4. Point the services at the backend:

- Base URL: `http://localhost:8080/api/v1`

5. Implement the screens according to the PDF specification (login, dashboard, transfer, history).

