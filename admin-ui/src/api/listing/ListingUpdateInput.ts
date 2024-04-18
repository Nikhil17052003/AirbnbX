import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SetupWishlistWhereUniqueInput } from "../setupWishlist/SetupWishlistWhereUniqueInput";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  description?: string;
  listingCreatedBy?: UserWhereUniqueInput | null;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placespace?: InputJsonValue;
  placeType?: string;
  price?: number;
  setupWishlist?: SetupWishlistWhereUniqueInput | null;
  title?: string;
  trips?: TripUpdateManyWithoutListingsInput;
};
