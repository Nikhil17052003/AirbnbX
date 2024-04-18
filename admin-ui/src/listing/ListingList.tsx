import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SETUPWISHLIST_TITLE_FIELD } from "../setupWishlist/SetupWishlistTitle";

export const ListingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Listings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="listingCreatedBy"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="locationData" source="locationData" />
        <TextField label="locationType" source="locationType" />
        <TextField label="MapData" source="mapData" />
        <TextField label="photos" source="photos" />
        <TextField label="placespace" source="placespace" />
        <TextField label="placeType" source="placeType" />
        <TextField label="price" source="price" />
        <ReferenceField
          label="Setup Wishlists"
          source="setupwishlist.id"
          reference="SetupWishlist"
        >
          <TextField source={SETUPWISHLIST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
