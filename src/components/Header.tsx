import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderHeight = 56;

const HeaderLeft = ({item}: {item?: React.ReactElement}) => {
  return <View style={{minWidth: 24}}>{item}</View>;
};

const HeaderRight = ({items}: {items?: React.ReactElement[]}) => {
  const iconMarginRight = (index: number, length?: number) => {
    return {marginRight: index === length ? 0 : 18};
  };
  return (
    <View style={styles.headerRightContainer}>
      {items?.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              styles.headerIconContainer,
              iconMarginRight(index, items?.length - 1),
            ]}>
            {item}
          </View>
        );
      })}
    </View>
  );
};

const Header = ({
  LeftComponent,
  RightComponent,
}: {
  LeftComponent?: React.ReactElement;
  RightComponent?: React.ReactElement[];
}) => {
  return (
    <View style={styles.container}>
      <View>
        <HeaderLeft item={LeftComponent} />
      </View>
      <View>{/* <Text>dfsfsdfsdfsdsd</Text> */}</View>
      <View>
        <HeaderRight items={RightComponent} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HeaderHeight,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    zIndex: 30,
    // backgroundColor: 'gray',
    marginBottom: 20,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  headerRightContainer: {
    flexDirection: 'row',
    minWidth: 24,
  },
  headerIconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
