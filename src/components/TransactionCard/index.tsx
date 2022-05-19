import React from "react";

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

type Category = {
  name: string;
  icon: string;
};

export interface TransactionCardProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

export const TransactionCard = ({
  title,
  type,
  amount,
  category,
  date,
}: TransactionCardProps) => {
  const isNegativeValue = type === "negative";

  return (
    <Container>
      <Title>{title}</Title>

      <Amount type={type}>
        {isNegativeValue && "- "}
        {amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
};
