import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { SetupWishlist } from "../setupWishlist/SetupWishlist";
import { Trip } from "../trip/Trip";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Listing | null;
  roles: JsonValue;
  setupWishlists?: Array<SetupWishlist>;
  trips?: Array<Trip>;
  updatedAt: Date;
  username: string;
};
