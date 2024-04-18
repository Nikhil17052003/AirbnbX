import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { SetupWishlistListRelationFilter } from "../setupWishlist/SetupWishlistListRelationFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  listings?: ListingWhereUniqueInput;
  setupWishlists?: SetupWishlistListRelationFilter;
  trips?: TripListRelationFilter;
  username?: StringFilter;
};
