import { SetupWishlist as TSetupWishlist } from "../api/setupWishlist/SetupWishlist";

export const SETUPWISHLIST_TITLE_FIELD = "id";

export const SetupWishlistTitle = (record: TSetupWishlist): string => {
  return record.id?.toString() || String(record.id);
};
