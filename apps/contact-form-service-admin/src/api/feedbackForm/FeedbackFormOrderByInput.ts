import { SortOrder } from "../../util/SortOrder";

export type FeedbackFormOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  name?: SortOrder;
  partName?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
  vinCode?: SortOrder;
};
