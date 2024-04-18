import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SetupWishlistWhereInput = {
  id?: StringFilter;
  listings?: ListingWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
