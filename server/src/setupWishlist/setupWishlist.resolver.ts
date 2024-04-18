import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SetupWishlistResolverBase } from "./base/setupWishlist.resolver.base";
import { SetupWishlist } from "./base/SetupWishlist";
import { SetupWishlistService } from "./setupWishlist.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SetupWishlist)
export class SetupWishlistResolver extends SetupWishlistResolverBase {
  constructor(
    protected readonly service: SetupWishlistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
