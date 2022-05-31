import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

interface ButtonProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

import { Container, Title } from "./styles";

export const Button = ({ title, onPress, ...rest }: ButtonProps) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
