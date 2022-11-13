import React, { ReactElement } from "react";
import { Appbar, Text } from "react-native-paper";
import { View } from "../Themed";


export default function ModalAppbar({
  contentTitle,
  navigation,
  elevated,
}: {
  contentTitle: string;
  secondaryAction?: any;
  navigation: any;
  showBackArrow?: boolean;
  elevated: boolean;
}): ReactElement<typeof ModalAppbar> {

  return (
    <View style={{
      zIndex: 2,
    }}>
      <Appbar.Header
        elevated={elevated}
      >
        <Appbar.Action
          icon={"close"}
          onPress={() => navigation.pop()}
        />
        <Appbar.Content
          title={<Text variant="titleLarge">{contentTitle}</Text>}
        />
      </Appbar.Header>
    </View>
  );
}
