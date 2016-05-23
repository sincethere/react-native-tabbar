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

import TabBar from 'react-native-xtabbar';
import List from './List.js';

export class TabComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badge: 7,
        }
    }

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
                        badge={this.state.badge}
                        title='Home'>
                        <View style={styles.text}>
                            <Text style={{fontSize: 18}}>Home</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        badge={7}
                        title='Location'>
                        <List />
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        point={true}
                        title='Scale'>
                        <View style={styles.text}>
                            <Text style={{fontSize: 18}}>Find</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        badge=' '
                        title='Find'>
                        <View style={styles.text}>
                            <Text style={{fontSize: 18}}>Find</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/start_normal.png')}
                        selectedIcon={require('./image/start_hightlight.png')}
                        title='Me'>
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
