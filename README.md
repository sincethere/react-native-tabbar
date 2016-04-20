# TabBar
Mobile bottom tabbar using react-native

## Installation

First you need to install react-native-xtabbar:

```javascript
npm install react-native-xtabbar --save
```

## Usage

```javascript
import TabBar from 'react-native-xtabbar';

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

```
## Screenshot
![](https://github.com/ngstyle/react-native-tabBar/raw/master/screenshot/screenshot_ios.jpg)
![](https://github.com/ngstyle/react-native-tabBar/raw/master/screenshot/screenshot_android.jpg)
