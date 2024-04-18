import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";
import { SetupWishlistWhereUniqueInput } from "../setupWishlist/SetupWishlistWhereUniqueInput";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placespace?: JsonFilter;
  placeType?: StringFilter;
  price?: IntFilter;
  setupWishlist?: SetupWishlistWhereUniqueInput;
  title?: StringFilter;
  trips?: TripListRelationFilter;
};
