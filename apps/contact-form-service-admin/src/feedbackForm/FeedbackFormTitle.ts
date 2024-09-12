import { FeedbackForm as TFeedbackForm } from "../api/feedbackForm/FeedbackForm";

export const FEEDBACKFORM_TITLE_FIELD = "name";

export const FeedbackFormTitle = (record: TFeedbackForm): string => {
  return record.name?.toString() || String(record.id);
};
