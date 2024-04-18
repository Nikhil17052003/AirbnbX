import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SetupWishlistCreateInput = {
  listings: ListingWhereUniqueInput | null;
  user: UserWhereUniqueInput;
};
