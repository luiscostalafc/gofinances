import React from "react";
import { categories } from "../../utils/categories";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

export interface TransactionCardProps {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

export const TransactionCard = ({
  name,
  type,
  amount,
  category,
  date,
}: TransactionCardProps) => {
  const categoryList = categories.find((item) => item.key === category);

  const isNegativeValue = type === "negative";

  return (
    <Container>
      <Title>{name}</Title>

      <Amount type={type}>
        {isNegativeValue && "- "}
        {amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={categoryList?.icon} />
          <CategoryName>{categoryList?.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
};
