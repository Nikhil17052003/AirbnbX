import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { SetupWishlistTitle } from "../setupWishlist/SetupWishlistTitle";
import { TripTitle } from "../trip/TripTitle";

export const ListingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="listingCreatedBy.id"
          reference="User"
          label="listingCreatedBy"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="locationType" source="locationType" />
        <div />
        <div />
        <div />
        <TextInput label="placeType" source="placeType" />
        <NumberInput step={1} label="price" source="price" />
        <ReferenceInput
          source="setupWishlist.id"
          reference="SetupWishlist"
          label="Setup Wishlists"
        >
          <SelectInput optionText={SetupWishlistTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <ReferenceArrayInput
          source="trips"
          reference="Trip"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TripTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
