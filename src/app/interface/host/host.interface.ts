export interface IHost {
  _id?: string;
  isAdmin: boolean;
  isBlocked: boolean;
  isOwner: boolean;
  createdAt: Date;
  updatedAt: Date;
}
