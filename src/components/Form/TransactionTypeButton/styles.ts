import styled from "styled-components/native";
import FeatherIcon from "@expo/vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  width: 100%;

  flex-direction: row;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.text};
`;

export const Icon = styled(FeatherIcon as any)`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
