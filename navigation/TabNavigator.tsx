import { Ionicons } from "@expo/vector-icons";
import { BottomNavigation} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabFourScreen";
import TabThreeScreen from "../screens/TabThreeScreen";
import TabFourScreen from "../screens/TabFourScreen";
import { useState } from "react";

export default function TabNavigator(): JSX.Element {
  const insets = useSafeAreaInsets();
 
  const staticRoutes: any[] = [
    {
      key: 'one',
      title: 'One',
      focusedIcon: "compass",
      unfocusedIcon: "compass-outline",
    },
    {
      key: 'two',
      title: 'Two',
      focusedIcon: ({ color, size }: any) => {
        return <Ionicons name="trail-sign" size={size} color={color} />;
      },
      unfocusedIcon: ({ color, size }: any) => {
        return <Ionicons name="trail-sign-outline" size={size} color={color} />;
      },
    },
    {
      key: 'three',
      title: 'Three',
      focusedIcon: "inbox",
      unfocusedIcon: "inbox-outline",
    },
    {
      key: 'four',
      title: 'Four',
      focusedIcon: "account-circle",
      unfocusedIcon: "account-circle-outline",
    },
  ];

  const [index, setIndex] = useState<number>(0);
  const [routes] = useState<any[]>(staticRoutes);

  return (
    <BottomNavigation
      safeAreaInsets={{ bottom: insets.bottom }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      labelMaxFontSizeMultiplier={2}
      renderScene={BottomNavigation.SceneMap({
        'one': TabOneScreen,
        'two': TabTwoScreen,
        'three': TabThreeScreen,
        'four': TabFourScreen,
      })}
      sceneAnimationEnabled
      sceneAnimationType='shifting'
    />
  );
}
