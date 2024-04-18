import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SetupWishlistUpdateInput = {
  listings?: ListingWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
};
