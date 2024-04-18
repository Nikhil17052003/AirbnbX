import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SetupWishlistUpdateManyWithoutUsersInput } from "./SetupWishlistUpdateManyWithoutUsersInput";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingWhereUniqueInput | null;
  password?: string;
  roles?: InputJsonValue;
  setupWishlists?: SetupWishlistUpdateManyWithoutUsersInput;
  trips?: TripUpdateManyWithoutUsersInput;
  username?: string;
};
