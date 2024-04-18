import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SetupWishlistModuleBase } from "./base/setupWishlist.module.base";
import { SetupWishlistService } from "./setupWishlist.service";
import { SetupWishlistController } from "./setupWishlist.controller";
import { SetupWishlistResolver } from "./setupWishlist.resolver";

@Module({
  imports: [SetupWishlistModuleBase, forwardRef(() => AuthModule)],
  controllers: [SetupWishlistController],
  providers: [SetupWishlistService, SetupWishlistResolver],
  exports: [SetupWishlistService],
})
export class SetupWishlistModule {}
