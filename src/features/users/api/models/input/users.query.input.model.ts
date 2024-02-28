export class UsersQueryInputModel {
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  pageNumber?: number;
  pageSize?: number;
  searchLoginTerm?: string;
  searchEmailTerm?: string;
}

export class UsersQueryFixedModel {
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  pageNumber: number;
  pageSize: number;
  searchLoginTerm: string | RegExp;
  searchEmailTerm: string | RegExp;
}
