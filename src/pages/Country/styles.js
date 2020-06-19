import styled from "styled-components/native";
import V from "../../styles/variables";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #222;
`;

export const FlatlistContainer = styled.View``;

export const FlatListItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: ${({ bg }) => bg};
  margin-bottom: 15px;
`;

export const DataStatus = styled.View`
  /* border: 2px solid red; */
  justify-content: center;
  align-items: flex-start;
`;

export const NumberPeoples = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  /* margin-top: 25px; */
  /* color: ${(props) => (props.changeColor ? props.changeColor : "#eee")}; */ 
  color: #eee;
`;

export const Date = styled.Text`
  font-size: 16px;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #eee;
`;

export const TypeCases = styled.Text`
  font-size: 18px;
  text-transform: capitalize;
  color: #eee;
`;
