import styled from "styled-components/native";
import V from "./variables";

export const Container = styled.View`
  flex: 1;
  background-color: ${V.colors.darkGrey1};
`;

export const Title = styled.Text`
  color: ${V.colors.lightGrey1};
  font-size: 28px;
  text-transform: capitalize;
  font-weight: bold;
  /* margin-right: auto; */
  /* border: 2px solid green; */
  /* margin-bottom: 10px; */
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: ${V.colors.lightGrey1};
`;

export const FlatlistItem = styled.View`
  width: 100%;
  background-color: ${V.colors.darkGrey2};
  padding: 15px 20px;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 3px;
`;

export const StateName = styled.Text`
  font-size: 20px;
  text-transform: capitalize;
  font-weight: bold;
  color: ${V.colors.lightGrey1};
  margin-bottom: 6px;
`;

export const WrapperStatus = styled.View`
  width: 80%;
`;

export const StateStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  /* border: 2px solid red; */
`;
export const StateStatusText = styled.Text`
  font-size: 15px;
  color: ${({ changeColor }) =>
    changeColor ? changeColor : V.colors.lightGrey1};
  /* color: ${({ change }) => change}; */
  text-transform: capitalize;
`;
