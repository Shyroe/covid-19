import styled from "styled-components/native";
import V from "../../styles/variables";
import { Image } from "react-native-svg";

export const WrapperPage = styled.ScrollView``;

export const Container = styled.View`
  flex: 1;
  background-color: ${V.colors.darkGrey1};
  padding: 0px 20px;
`;

export const ButtonDetail = styled.TouchableOpacity`
  background: transparent;
  align-items: center;
  justify-content: center;
`;

export const ButtonDetailText = styled.Text`
  font-size: 15px;
  color: ${V.colors.lightGrey1};
  text-transform: capitalize;
`;

export const WrapperTitle = styled.View`
  padding: 20px 0px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const FlatlistContainer = styled.View`
  flex-direction: row;
`;

export const FlatlistItem = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  border-radius: 5px;
  height: auto;
  width: 33%;
  padding: 20px 0;
  background-color: ${(props) => props.bg};
`;

export const ImageStatus = styled(Image)`
  width: 100%;
  height: 25%;
  margin-bottom: 20px;
`;

export const NumberPeoples = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 25px;
  color: ${({ changeColor }) =>
    changeColor ? changeColor : V.colors.lightGrey1};
`;

export const TypeCases = styled.Text`
  font-size: 18px;
  text-transform: capitalize;
  color: ${({ changeColor }) =>
    changeColor ? changeColor : V.colors.lightGrey1};
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  margin-top: 15px;
  padding-bottom: 30px;
`;

export const StatusItem = styled.View`
  padding: 10px 15px;
  align-items: center;
  justify-content: center;
  border-right-width: 3px;
  border-right-color: ${V.colors.lightGrey1};
`;

export const WrapperFooter = styled.View`
  background-color: ${V.colors.darkGrey2};
  padding: 10px 20px;
`;

export const ButtonPrimary = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  background-color: ${V.colors.secondary};
  padding: 10px 15px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${V.colors.lightGrey1};
`;
