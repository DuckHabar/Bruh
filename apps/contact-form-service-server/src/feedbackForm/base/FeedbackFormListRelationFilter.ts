/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FeedbackFormWhereInput } from "./FeedbackFormWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FeedbackFormListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FeedbackFormWhereInput,
  })
  @ValidateNested()
  @Type(() => FeedbackFormWhereInput)
  @IsOptional()
  @Field(() => FeedbackFormWhereInput, {
    nullable: true,
  })
  every?: FeedbackFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => FeedbackFormWhereInput,
  })
  @ValidateNested()
  @Type(() => FeedbackFormWhereInput)
  @IsOptional()
  @Field(() => FeedbackFormWhereInput, {
    nullable: true,
  })
  some?: FeedbackFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => FeedbackFormWhereInput,
  })
  @ValidateNested()
  @Type(() => FeedbackFormWhereInput)
  @IsOptional()
  @Field(() => FeedbackFormWhereInput, {
    nullable: true,
  })
  none?: FeedbackFormWhereInput;
}
export { FeedbackFormListRelationFilter as FeedbackFormListRelationFilter };
