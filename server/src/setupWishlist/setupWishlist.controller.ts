import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SetupWishlistService } from "./setupWishlist.service";
import { SetupWishlistControllerBase } from "./base/setupWishlist.controller.base";

@swagger.ApiTags("setupWishlists")
@common.Controller("setupWishlists")
export class SetupWishlistController extends SetupWishlistControllerBase {
  constructor(
    protected readonly service: SetupWishlistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
