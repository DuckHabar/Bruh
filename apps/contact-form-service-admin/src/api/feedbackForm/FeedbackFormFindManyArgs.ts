import { FeedbackFormWhereInput } from "./FeedbackFormWhereInput";
import { FeedbackFormOrderByInput } from "./FeedbackFormOrderByInput";

export type FeedbackFormFindManyArgs = {
  where?: FeedbackFormWhereInput;
  orderBy?: Array<FeedbackFormOrderByInput>;
  skip?: number;
  take?: number;
};
