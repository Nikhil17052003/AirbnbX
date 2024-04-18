import { SetupWishlistWhereInput } from "./SetupWishlistWhereInput";
import { SetupWishlistOrderByInput } from "./SetupWishlistOrderByInput";

export type SetupWishlistFindManyArgs = {
  where?: SetupWishlistWhereInput;
  orderBy?: Array<SetupWishlistOrderByInput>;
  skip?: number;
  take?: number;
};
