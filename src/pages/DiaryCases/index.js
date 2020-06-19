import React, { useState, useEffect } from "react";
import * as S from "./styles";
import V from "../../styles/variables";
import {
  Title,
  Header,
  FlatlistItem,
  StateStatusText,
  StateStatus,
  StateName,
  WrapperStatus,
  Container,
  HeaderText,
} from "../../styles/styled";
import { FlatList } from "react-native";
import axios from "axios";

export default function index() {
  const [listStates, setListStates] = useState([]);
  const [actualDate, setActualDate] = useState("");
  const [totalCases, setTotalCases] = useState(0);

  function getTotalCases() {
    const total = listStates.reduce((acc, item) => {
      return acc + item.cases;
    }, 0);

    setTotalCases(total);
  }

  function getActualDate() {
    let today = new Date().toISOString().slice(0, 10);
    console.log("today: ", today);

    // regex
    const search = /-/g;
    const formatToday = today.replace(search, "");
    console.log("formatToday: ", formatToday);
    setActualDate(formatToday);
    // return formatToday;
  }

  useEffect(() => {
    // getActualDate();

    async function fetchData() {
      const res = await axios.get(
        `https://covid19-brazil-api.now.sh/api/report/v1/brazil/20200615`
      );
      console.log("res data diary cases: ", res.data);
      setListStates(res.data.data);
    }
    fetchData();

    getTotalCases();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Total</Title>
        <HeaderText>{totalCases} Casos</HeaderText>
      </Header>
      <FlatList
        data={listStates}
        keyExtractor={(item) => String(item.uid)}
        renderItem={({ item }) => (
          <FlatlistItem>
            <StateName>{item.state}</StateName>
            <WrapperStatus>
              <StateStatus>
                <StateStatusText changeColor={V.colors.primary}>
                  Infectados: {item.cases}
                </StateStatusText>
                <StateStatusText changeColor={V.colors.secondary}>
                  Curados: {item.suspects}
                </StateStatusText>
              </StateStatus>
              <StateStatus>
                <StateStatusText changeColor={V.colors.tertiary}>
                  Tratados: {item.refuses}
                </StateStatusText>
                <StateStatusText changeColor={V.colors.quaternary}>
                  Mortos: {item.deaths}
                </StateStatusText>
              </StateStatus>
            </WrapperStatus>
          </FlatlistItem>
        )}
      ></FlatList>
    </Container>
  );
}
