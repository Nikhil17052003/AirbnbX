/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SetupWishlistWhereInput } from "./SetupWishlistWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SetupWishlistListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SetupWishlistWhereInput,
  })
  @ValidateNested()
  @Type(() => SetupWishlistWhereInput)
  @IsOptional()
  @Field(() => SetupWishlistWhereInput, {
    nullable: true,
  })
  every?: SetupWishlistWhereInput;

  @ApiProperty({
    required: false,
    type: () => SetupWishlistWhereInput,
  })
  @ValidateNested()
  @Type(() => SetupWishlistWhereInput)
  @IsOptional()
  @Field(() => SetupWishlistWhereInput, {
    nullable: true,
  })
  some?: SetupWishlistWhereInput;

  @ApiProperty({
    required: false,
    type: () => SetupWishlistWhereInput,
  })
  @ValidateNested()
  @Type(() => SetupWishlistWhereInput)
  @IsOptional()
  @Field(() => SetupWishlistWhereInput, {
    nullable: true,
  })
  none?: SetupWishlistWhereInput;
}
export { SetupWishlistListRelationFilter as SetupWishlistListRelationFilter };
