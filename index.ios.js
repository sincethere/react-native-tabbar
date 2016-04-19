/**
 * chon_den
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TabBar from './component/TabBar';

export class TabComponentDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{height:20}}/>

                <TabBar style={styles.content}>
                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        onPress={() => {
                            console.log("first onPress");
                        }}
                        title='首页'>
                        <View style={styles.text}>
                            <Text style={{fontSize: 18}}>Home</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        title='定位'>
                        <View style={styles.text}>
                            <Text style={{fontSize: 18}}>Location</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        title='发现'>
                        <View style={styles.text}>
                            <Text style={{fontSize: 18}}>Find</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        title='我'>
                        <View style={styles.text}>
                            <Text style={{fontSize: 18}}>Me</Text>
                        </View>
                    </TabBar.Item>
                </TabBar>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

AppRegistry.registerComponent('TabComponentDemo', () => TabComponentDemo);
