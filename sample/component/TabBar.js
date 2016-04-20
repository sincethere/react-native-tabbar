/**
 *  TabBar
 */
'use strict'

import React, {
    StyleSheet,
    Component,
    View,
    Image,
    Text,
    TouchableHighlight,
    Dimensions,
} from 'react-native';

import EventEmitter from './TabEventEmitter';
import TabBarItem from './TabBarItem';

export default class TabBar extends Component {
    static Item = TabBarItem;

    static defaultProps = {
        defaultPage: 0,
        navFontSize: 14,
        navTextColor: 'black',
        navTextColorSelected: '#FF9100',
    };

    static propTypes = {
        defaultPage: React.PropTypes.number,
        navFontSize: React.PropTypes.number,
        navTextColor: React.PropTypes.string,
        navTextColorSelected: React.PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
        }
    }

    render() {
        let children = this.props.children;
        if (!children.length) {
            throw new Error("at least two child component.");
        }

        // 底部tab按钮组
        let navs = [];

        this.views = children.map(
            (child,i) => {
                const imgSrc = this.state.selectedIndex == i ? child.props.selectedIcon : child.props.icon;
                const color = this.state.selectedIndex == i ? this.props.navTextColorSelected : this.props.navTextColor;

                navs[i] = (
                    <TouchableHighlight
                        key={i}
                        underlayColor={'transparent'}
                        style={styles.navItem}
                        onPress={() => {
                            if (child.props.onPress) {
                                child.props.onPress();
                            }

                            this.setState({selectedIndex: i,})
                            EventEmitter.emit("tabBarWillChangeSelected",child.props);
                        }}>
                        <View style={styles.center}>
                            <Image style={styles.navImage} resizeMode='cover' source={imgSrc}/>
                            <Text style={[styles.navText,{color: color,fontSize: this.props.navFontSize}]}>
                                {child.props.title}
                            </Text>
                        </View>
                    </TouchableHighlight>
                );


                let style = this.state.selectedIndex === i ? styles.base : [styles.base,styles.gone];

                return (
                    <View
                        key={'view_' + i}
                        style={style}>
                        {child}
                    </View>
                );
            }
        );

        return (
            <View style={[styles.container,this.props.style]}>
                <View style={styles.content}>
                    {this.views}
                </View>
                <View style={styles.nav}>
                    {navs}
                </View>
            </View>
        );
    }

    componentDidMount() {
        // 默认选中第一个，且显示
        let page = this.props.defaultPage;

        if (page >= this.props.children.length || page < 0){
            page = 0;
        }
        this.setState({selectedIndex: page,});
        EventEmitter.emit("tabBarWillChangeSelected",this.props.children[page].props);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        overflow: 'hidden',
    },
    content: {
        flex: 1
    },
    base: {
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    gone: {
        top: Dimensions.get('window').height,
        bottom: -Dimensions.get('window').height,
    },
    nav: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        height: 56,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navImage: {
        width: 24,
        height: 24,
        marginBottom: 2,
    },
    navText: {
        marginTop: 2,
    },
});
