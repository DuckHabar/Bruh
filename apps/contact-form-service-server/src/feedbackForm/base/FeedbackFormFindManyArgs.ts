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
import { FeedbackFormWhereInput } from "./FeedbackFormWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FeedbackFormOrderByInput } from "./FeedbackFormOrderByInput";

@ArgsType()
class FeedbackFormFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FeedbackFormWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FeedbackFormWhereInput, { nullable: true })
  @Type(() => FeedbackFormWhereInput)
  where?: FeedbackFormWhereInput;

  @ApiProperty({
    required: false,
    type: [FeedbackFormOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FeedbackFormOrderByInput], { nullable: true })
  @Type(() => FeedbackFormOrderByInput)
  orderBy?: Array<FeedbackFormOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FeedbackFormFindManyArgs as FeedbackFormFindManyArgs };
