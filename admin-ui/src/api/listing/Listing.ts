import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { SetupWishlist } from "../setupWishlist/SetupWishlist";
import { Trip } from "../trip/Trip";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy?: User | null;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placespace: JsonValue;
  placeType: string;
  price: number;
  setupWishlist?: SetupWishlist | null;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
};
