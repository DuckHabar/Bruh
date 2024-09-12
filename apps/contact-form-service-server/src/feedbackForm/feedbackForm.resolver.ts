import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FeedbackFormResolverBase } from "./base/feedbackForm.resolver.base";
import { FeedbackForm } from "./base/FeedbackForm";
import { FeedbackFormService } from "./feedbackForm.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FeedbackForm)
export class FeedbackFormResolver extends FeedbackFormResolverBase {
  constructor(
    protected readonly service: FeedbackFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
