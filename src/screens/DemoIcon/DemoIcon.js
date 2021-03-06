import React, { Component } from 'react';
import { Subtitle, Title, View } from '@blankapp/ui';
import { Icon } from '@blankapp/ui-pro';
import DemoScreen from '../../components/DemoScreen';

class DemoIcon extends Component {
  static navigationOptions = {
    title: 'Icon',
  };

  renderHeader() {
    return (
      <Icon name="thumb-up" />
    );
  }

  renderContent() {
    return (
      <View>
        <Title>Variations</Title>
        <View>
          <Subtitle>Size</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Icon name="thumb-up" size={24} />
            <Icon name="thumb-up" size={44} />
            <Icon name="thumb-up" size={64} />
            <Icon name="thumb-up" size={84} />
          </View>
        </View>
        <View>
          <Subtitle>Color</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Icon name="thumb-up" color="red" />
            <Icon name="thumb-up" color="green" />
            <Icon name="thumb-up" color="blue" />
            <Icon name="thumb-up" color="yellow" />
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <DemoScreen
        HeaderComponent={() => this.renderHeader()}
        ContentComponent={() => this.renderContent()}
      />
    );
  }
}

export default DemoIcon;
