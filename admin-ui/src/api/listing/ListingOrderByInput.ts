import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  listingCreatedById?: SortOrder;
  locationData?: SortOrder;
  locationType?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placespace?: SortOrder;
  placeType?: SortOrder;
  price?: SortOrder;
  setupWishlistId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
