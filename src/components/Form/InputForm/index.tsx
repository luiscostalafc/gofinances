import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import { Input } from "../Input";

import { Container, Error } from "./styles";

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export const InputForm = ({
  control,
  name,
  error,
  ...rest
}: InputFormProps) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input {...rest} onChangeText={onChange} value={value} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
