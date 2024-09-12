/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FeedbackFormWhereUniqueInput } from "./FeedbackFormWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FeedbackFormUpdateInput } from "./FeedbackFormUpdateInput";

@ArgsType()
class UpdateFeedbackFormArgs {
  @ApiProperty({
    required: true,
    type: () => FeedbackFormWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FeedbackFormWhereUniqueInput)
  @Field(() => FeedbackFormWhereUniqueInput, { nullable: false })
  where!: FeedbackFormWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FeedbackFormUpdateInput,
  })
  @ValidateNested()
  @Type(() => FeedbackFormUpdateInput)
  @Field(() => FeedbackFormUpdateInput, { nullable: false })
  data!: FeedbackFormUpdateInput;
}

export { UpdateFeedbackFormArgs as UpdateFeedbackFormArgs };
