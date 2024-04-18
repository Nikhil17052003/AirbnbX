import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SetupWishlistServiceBase } from "./base/setupWishlist.service.base";

@Injectable()
export class SetupWishlistService extends SetupWishlistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
