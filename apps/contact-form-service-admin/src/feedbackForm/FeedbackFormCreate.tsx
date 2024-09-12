import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FeedbackFormCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="message" multiline source="message" />
        <TextInput label="name" source="name" />
        <TextInput label="partName" source="partName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="vinCode" source="vinCode" />
      </SimpleForm>
    </Create>
  );
};
