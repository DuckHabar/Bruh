import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FeedbackFormModuleBase } from "./base/feedbackForm.module.base";
import { FeedbackFormService } from "./feedbackForm.service";
import { FeedbackFormController } from "./feedbackForm.controller";
import { FeedbackFormResolver } from "./feedbackForm.resolver";

@Module({
  imports: [FeedbackFormModuleBase, forwardRef(() => AuthModule)],
  controllers: [FeedbackFormController],
  providers: [FeedbackFormService, FeedbackFormResolver],
  exports: [FeedbackFormService],
})
export class FeedbackFormModule {}
