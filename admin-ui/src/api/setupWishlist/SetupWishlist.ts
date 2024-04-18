import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type SetupWishlist = {
  createdAt: Date;
  id: string;
  listings?: Listing | null;
  updatedAt: Date;
  user?: User;
};
