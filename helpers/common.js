import { Dimensions } from "react-native";

export const hp = percentage => {
    const { height } = Dimensions.get('window');
    return (height * percentage) / 100;
}

export const wp = percentage => {
    const { width } = Dimensions.get('window');
    return (width * percentage) / 100;
}