import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FeedbackFormEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="message" multiline source="message" />
        <TextInput label="name" source="name" />
        <TextInput label="partName" source="partName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="vinCode" source="vinCode" />
      </SimpleForm>
    </Edit>
  );
};
