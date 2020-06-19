import React, { useState, useEffect, Fragment, useContext } from "react";
import * as S from "./styles";
import { Title } from "../../styles/styled";
import V from "../../styles/variables";
import { FlatList, View, Image } from "react-native";
import { Picker } from "@react-native-community/picker";
import { CountryContext } from "../../context/CountryState";
import axios from "axios";
import SvgInfected from "../../components/Svgs/Infected";
import SvgRecovered from "../../components/Svgs/Recovered";
import SvgDeath from "../../components/Svgs/Death";

export default function index(props) {
  // use Context
  const { selectedCountryName, setSelectedCountryName } = useContext(
    CountryContext
  );

  const [listCountry, setListCountry] = useState([]);
  const [fetchCountry, setFetchCountry] = useState(false);
  const [globalCases, setGlobalCases] = useState(0);
  const [globalHeals, setGlobalHeals] = useState(0);
  const [globalDeaths, setGlobalDeaths] = useState(0);
  const [country, setCountry] = useState({});

  function handleNavigation(route) {
    props.navigation.navigate(route);
  }

  // Select
  function handleSelect(itemValue) {
    console.log("Handle select item value: ", itemValue);
    setSelectedCountryName(itemValue);
  }

  function checkSelectValue() {
    setFetchCountry(!fetchCountry);
  }

  function getGlobalCases() {
    // console.log("list country: ", listCountry);
    const total = listCountry.reduce((acc, item) => {
      return acc + item.cases;
    }, 0);

    setGlobalCases(total);
  }

  function getGlobalCured() {
    const total = listCountry.reduce((acc, item) => {
      return acc + item.recovered;
    }, 0);

    setGlobalHeals(total);
  }

  function getGlobalDeaths() {
    const total = listCountry.reduce((acc, item) => {
      return acc + item.deaths;
    }, 0);

    setGlobalDeaths(total);
  }

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://covid19-brazil-api.now.sh/api/report/v1/countries"
      );

      setListCountry([...res.data.data]);
    }

    fetchData();

    getGlobalCases();
    getGlobalCured();
    getGlobalDeaths();
  }, []);

  // Get data about selected country
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://covid19-brazil-api.now.sh/api/report/v1/${selectedCountryName}`
      );
      // console.log("country selected data: ", res.data);
      setCountry(res.data.data);
    }
    fetchData();
  }, [fetchCountry]);

  return (
    <S.WrapperPage>
      <S.Container>
        <S.WrapperTitle>
          <Title>Situação mundial</Title>
        </S.WrapperTitle>
        <S.FlatlistContainer>
          <S.FlatlistItem bg={V.colors.primary}>
            <SvgInfected width="50" height="50" />
            <S.NumberPeoples>{globalHeals}</S.NumberPeoples>
            <S.TypeCases>Infectados</S.TypeCases>
          </S.FlatlistItem>
          <S.FlatlistItem bg={V.colors.secondary}>
            <SvgRecovered width="50" height="50" />
            <S.NumberPeoples>{globalCases}</S.NumberPeoples>
            <S.TypeCases>Curados</S.TypeCases>
          </S.FlatlistItem>
          <S.FlatlistItem bg={V.colors.quaternary}>
            <SvgDeath width="50" height="50" />
            <S.NumberPeoples>{globalDeaths}</S.NumberPeoples>
            <S.TypeCases>Mortos</S.TypeCases>
          </S.FlatlistItem>
        </S.FlatlistContainer>
        <S.WrapperTitle>
          <Title>Estados brasileiros</Title>
          <S.ButtonDetail onPress={() => handleNavigation("StatesDetail")}>
            <S.ButtonDetailText>detalhe</S.ButtonDetailText>
          </S.ButtonDetail>
        </S.WrapperTitle>
        <S.WrapperTitle>
          <Title>Casos diários</Title>
          <S.ButtonDetail onPress={() => handleNavigation("DiaryCases")}>
            <S.ButtonDetailText>detalhe</S.ButtonDetailText>
          </S.ButtonDetail>
        </S.WrapperTitle>
        <S.WrapperTitle>
          <Title>{country.country} Registros</Title>
          <S.ButtonDetail onPress={() => handleNavigation("Country")}>
            <S.ButtonDetailText>detalhe</S.ButtonDetailText>
          </S.ButtonDetail>
        </S.WrapperTitle>
        <S.StatusContainer>
          <S.StatusItem>
            <S.NumberPeoples changeColor={V.colors.primary}>
              {Number(country.cases).toLocaleString("en")}
            </S.NumberPeoples>
            <S.TypeCases changeColor={V.colors.primary}>Infectados</S.TypeCases>
          </S.StatusItem>
          <S.StatusItem>
            <S.NumberPeoples changeColor={V.colors.secondary}>
              {country.recovered}
            </S.NumberPeoples>
            <S.TypeCases changeColor={V.colors.secondary}>
              Suspeitos
            </S.TypeCases>
          </S.StatusItem>
          <S.StatusItem>
            <S.NumberPeoples changeColor={V.colors.quaternary}>
              {country.deaths}
            </S.NumberPeoples>
            <S.TypeCases changeColor={V.colors.quaternary}>Mortos</S.TypeCases>
          </S.StatusItem>
        </S.StatusContainer>
      </S.Container>
      <S.WrapperFooter>
        <S.WrapperTitle>
          <Title>Selecione seu país</Title>
        </S.WrapperTitle>

        <Picker
          style={{ color: "#eee" }}
          selectedValue={selectedCountryName}
          onValueChange={handleSelect}
        >
          {listCountry.map((item) => {
            return (
              <Picker.Item
                key={String(item.country)}
                label={item.country}
                value={item.country}
              />
            );
          })}
        </Picker>
        <S.ButtonPrimary onPress={checkSelectValue}>
          <S.ButtonText>verificar</S.ButtonText>
        </S.ButtonPrimary>
      </S.WrapperFooter>
    </S.WrapperPage>
  );
}
