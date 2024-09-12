import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FeedbackFormWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  name?: StringNullableFilter;
  partName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  vinCode?: StringNullableFilter;
};
