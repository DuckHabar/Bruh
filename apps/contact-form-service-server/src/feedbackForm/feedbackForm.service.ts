import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeedbackFormServiceBase } from "./base/feedbackForm.service.base";

@Injectable()
export class FeedbackFormService extends FeedbackFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
