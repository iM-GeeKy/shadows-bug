import { useNavigation } from "@react-navigation/native";
import { ReactElement } from "react";
import { View } from "react-native";
import { Appbar, MD3Theme, Text, useTheme } from "react-native-paper";

export default function MainAppbar({
  contentTitle,
  elevated,
}: {
  contentTitle: string;
  elevated: boolean;
}): ReactElement<typeof MainAppbar> {
  const theme: MD3Theme = useTheme();
  const navigation = useNavigation();

  return (
    <View style={{
      zIndex: 2,
    }}>
      <Appbar.Header
        mode="small"
        elevated={elevated}
      >
        <Appbar.Content
          title={<Text variant="titleLarge">{contentTitle}</Text>}
        />
        <Appbar.Action
          icon="information"
          onPress={() => {navigation.navigate('Modal')}}
        />
      </Appbar.Header>
    </View>
  );
}
