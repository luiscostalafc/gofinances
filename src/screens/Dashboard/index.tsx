import React from "react";
import { HighligthCard } from "../../components/HighligthCard";
import { TransactionCard } from "../../components/TransactionCard";

import * as S from "./styles";

export function Dashboard() {
  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/46203983?v=4",
              }}
            />
            <S.User>
              <S.UserGreeting>Olá,</S.UserGreeting>
              <S.UserName>Luis</S.UserName>
            </S.User>
          </S.UserInfo>
          <S.Icon name="power" />
        </S.UserWrapper>
      </S.Header>
      <S.HighligthCards>
        <HighligthCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTrasaciton="Última entrada dia 13 de abril"
        />
        <HighligthCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTrasaciton="Última saída dia 03 de abril"
        />
        <HighligthCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTrasaciton="01 à 16 de abril"
        />
      </S.HighligthCards>

      <S.Transactions>
        <S.Title>Listagem</S.Title>
        <TransactionCard />
      </S.Transactions>
    </S.Container>
  );
}
