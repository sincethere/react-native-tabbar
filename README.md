
Mobile bottom tab bar using react-native,support android and ios.
Pages won't be rendered when you switch to other tabs,also save the status of invisible pages.

## Installation

First you need to install react-native-xtabbar:

```javascript
npm install react-native-xtabbar --save
```

## Props

### Tabbar

| prop | value | required/optional | comment |
| --- | --- | --- | --- |
| onItemSelected | function | optional | this function will be called when the focus item changing |
| navTextColor | color | optional | nav text normal color |
| navTextColorSelected | color | optional | nav text selected color |

### Tabbar.Item

| prop | value | required/optional | comment |
| --- | --- | --- | --- |
| icon | image source | required | the icon when item is not focus |
| selectedIcon | image source | required | the icon when item is focus |
| title | string | required | title of item |
| onPress | function | optional | the function will be called when item is selected. you can also use Tabbar's onItemSelected function if you want to control press callback in one place. |
| badge | number/string | optional | badge |

## Usage

```javascript
import TabBar from 'react-native-xtabbar';

<TabBar
    style={styles.content}
    onItemSelected={(index) => {console.log(`current item's index is ${index}`);}}
>
    <TabBar.Item
        icon={require('./image/start_normal.png')}
        selectedIcon={require('./image/start_hightlight.png')}
        onPress={() => {
            // do sth
        }}
        badge={7}
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
## TODO
~~TabBar.Item badge~~

## Screenshot
![](https://github.com/ngstyle/react-native-tabBar/raw/master/screenshot/screenshot_ios.jpg)
![](https://github.com/ngstyle/react-native-tabBar/raw/master/screenshot/screenshot_android.jpg)
