import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FeedbackFormService } from "./feedbackForm.service";
import { FeedbackFormControllerBase } from "./base/feedbackForm.controller.base";

@swagger.ApiTags("feedbackForms")
@common.Controller("feedbackForms")
export class FeedbackFormController extends FeedbackFormControllerBase {
  constructor(
    protected readonly service: FeedbackFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
