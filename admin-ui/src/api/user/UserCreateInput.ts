import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SetupWishlistCreateNestedManyWithoutUsersInput } from "./SetupWishlistCreateNestedManyWithoutUsersInput";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingWhereUniqueInput | null;
  password: string;
  roles: InputJsonValue;
  setupWishlists?: SetupWishlistCreateNestedManyWithoutUsersInput;
  trips?: TripCreateNestedManyWithoutUsersInput;
  username: string;
};
