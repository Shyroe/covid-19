import React, { useState, useEffect } from "react";
// import * as S from "./styles";
import V from "../../styles/variables";
import {
  Title,
  Header,
  FlatlistItem,
  StateName,
  StateStatus,
  StateStatusText,
  Container,
} from "../../styles/styled";
import axios from "axios";
import { FlatList } from "react-native";

export default function index() {
  const [listStates, setListStates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://covid19-brazil-api.now.sh/api/report/v1"
      );
      console.log("state res: ", res.data);
      setListStates(res.data.data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Todos os Estados</Title>
      </Header>
      <FlatList
        data={listStates}
        keyExtractor={(item) => String(item.uid)}
        renderItem={({ item }) => (
          <FlatlistItem>
            <StateName>{item.state}</StateName>
            <StateStatus>
              <StateStatusText changeColor={V.colors.primary}>
                Infectados: {item.cases}
              </StateStatusText>
              <StateStatusText changeColor={V.colors.secondary}>
                Curados: {item.suspects}
              </StateStatusText>
              <StateStatusText changeColor={V.colors.quaternary}>
                Mortos: {item.deaths}
              </StateStatusText>
            </StateStatus>
          </FlatlistItem>
        )}
      ></FlatList>
    </Container>
  );
}
