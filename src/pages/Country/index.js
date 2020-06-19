import React, { useState, useEffect, useContext } from "react";
import * as S from "./styles";
import { Title } from "../../styles/styled";
import { FlatList, Image } from "react-native";
import V from "../../styles/variables";
import { CountryContext } from "../../context/CountryState";
import axios from "axios";

//import assets
import SvgInfected from "../../components/Svgs/Infected";
import SvgRecovered from "../../components/Svgs/Recovered";
import SvgDeath from "../../components/Svgs/Death";

export default function index() {
  // context
  // const { selectedCountryName } = useContext(CountryContext)
  const [listStates, setListStates] = useState([]);
  const [actualDate, setActualDate] = useState("");
  const [totalCases, setTotalCases] = useState(0);
  const [totalSuspects, setTotalSuspects] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);

  function getTotalCases() {
    const total = listStates.reduce((acc, item) => {
      return acc + item.cases;
    }, 0);

    setTotalCases(total);
    // console.log("last update total cases: ", totalCases);
  }

  function getTotalSuspects() {
    const total = listStates.reduce((acc, item) => {
      return acc + item.suspects;
    }, 0);

    setTotalSuspects(total);
  }

  function getTotalDeaths() {
    const total = listStates.reduce((acc, item) => {
      return acc + item.deaths;
    }, 0);

    setTotalDeaths(total);
  }

  function getActualDate() {
    let today = new Date().toISOString().slice(0, 10);
    // console.log("today: ", today);

    // regex
    const search = /-/g;
    const formatToday = today.replace(search, "");
    console.log("formatToday: ", formatToday);
    setActualDate(formatToday);
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     getActualDate();
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    // getActualDate();

    async function fetchData() {
      const res = await axios.get(
        `https://covid19-brazil-api.now.sh/api/report/v1/brazil/20200615`
      );
      console.log("res data last updates: ", res.data);
      setListStates(res.data.data);
    }
    fetchData();

    getTotalCases();
    getTotalSuspects();
    getTotalDeaths();
  }, []);

  return (
    <S.Container>
      <Title>Últimas atualizações</Title>
      <S.Date>18-Junho-2020</S.Date>
      <S.FlatlistContainer>
        <S.FlatListItem bg={V.colors.primary}>
          <S.DataStatus>
            <S.TypeCases>Infectados</S.TypeCases>
            <S.NumberPeoples>{totalCases}</S.NumberPeoples>
          </S.DataStatus>
          <SvgInfected width="50" height="50" />
        </S.FlatListItem>
        <S.FlatListItem bg={V.colors.secondary}>
          <S.DataStatus>
            <S.TypeCases>Curados</S.TypeCases>
            <S.NumberPeoples>{totalSuspects}</S.NumberPeoples>
          </S.DataStatus>
          <SvgRecovered width="50" height="50" />
        </S.FlatListItem>
        <S.FlatListItem bg={V.colors.quaternary}>
          <S.DataStatus>
            <S.TypeCases>Mortos</S.TypeCases>
            <S.NumberPeoples>{totalDeaths}</S.NumberPeoples>
          </S.DataStatus>
          <SvgDeath width="50" height="50" />
        </S.FlatListItem>
      </S.FlatlistContainer>
    </S.Container>
  );
}
