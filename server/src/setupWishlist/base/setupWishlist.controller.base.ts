/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SetupWishlistService } from "../setupWishlist.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SetupWishlistCreateInput } from "./SetupWishlistCreateInput";
import { SetupWishlist } from "./SetupWishlist";
import { SetupWishlistFindManyArgs } from "./SetupWishlistFindManyArgs";
import { SetupWishlistWhereUniqueInput } from "./SetupWishlistWhereUniqueInput";
import { SetupWishlistUpdateInput } from "./SetupWishlistUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SetupWishlistControllerBase {
  constructor(
    protected readonly service: SetupWishlistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SetupWishlist })
  @nestAccessControl.UseRoles({
    resource: "SetupWishlist",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSetupWishlist(
    @common.Body() data: SetupWishlistCreateInput
  ): Promise<SetupWishlist> {
    return await this.service.createSetupWishlist({
      data: {
        ...data,

        listings: {
          connect: data.listings,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,
        id: true,

        listings: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SetupWishlist] })
  @ApiNestedQuery(SetupWishlistFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SetupWishlist",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async setupWishlists(
    @common.Req() request: Request
  ): Promise<SetupWishlist[]> {
    const args = plainToClass(SetupWishlistFindManyArgs, request.query);
    return this.service.setupWishlists({
      ...args,
      select: {
        createdAt: true,
        id: true,

        listings: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SetupWishlist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SetupWishlist",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async setupWishlist(
    @common.Param() params: SetupWishlistWhereUniqueInput
  ): Promise<SetupWishlist | null> {
    const result = await this.service.setupWishlist({
      where: params,
      select: {
        createdAt: true,
        id: true,

        listings: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SetupWishlist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SetupWishlist",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSetupWishlist(
    @common.Param() params: SetupWishlistWhereUniqueInput,
    @common.Body() data: SetupWishlistUpdateInput
  ): Promise<SetupWishlist | null> {
    try {
      return await this.service.updateSetupWishlist({
        where: params,
        data: {
          ...data,

          listings: {
            connect: data.listings,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,
          id: true,

          listings: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SetupWishlist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SetupWishlist",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSetupWishlist(
    @common.Param() params: SetupWishlistWhereUniqueInput
  ): Promise<SetupWishlist | null> {
    try {
      return await this.service.deleteSetupWishlist({
        where: params,
        select: {
          createdAt: true,
          id: true,

          listings: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
