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
        ...View.propTypes,
        style: View.propTypes.style,
        defaultPage: React.PropTypes.number,
        navFontSize: React.PropTypes.number,
        navTextColor: React.PropTypes.string,
        navTextColorSelected: React.PropTypes.string,
        onItemSelected: React.PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.visibles = [];
        this.state = {
            selectedIndex: 0,
        }
    }

    getBadge(child) {
        let value = 0;
        if (typeof child.props.badge == 'number') {
            value = child.props.badge;
        }

        if (child.props.badge || value != 0) {
          const _badgeStyle = (typeof child.props.badge == 'number') ? styles.badgeWithNumber : styles.badgeNoNumber;

          let valueStr = '';
          if (value > 99) {
              valueStr = 99;
          } else {
              valueStr = child.props.badge;
          }

          return (
              <View style={[_badgeStyle, this.props.badgeStyle]}>
                  <Text style={styles.badgeText}>{valueStr}</Text>
              </View>
          );
        }
    }

    render() {
        let children = this.props.children;
        if (!children.length) {
            throw new Error("at least two child component are needed.");
        }

        // 底部tab按钮组
        let navs = [];

        const contentViews = children.map(
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

                            this.update(i);
                        }}>
                        <View style={styles.center}>
                            <Image style={styles.navImage} resizeMode='cover' source={imgSrc}/>
                            <Text style={[styles.navText,{color: color,fontSize: this.props.navFontSize}]}>
                                {child.props.title}
                            </Text>
                            {this.getBadge(child)}
                        </View>
                    </TouchableHighlight>
                );

                if (!this.visibles[i]) {
                    return null;
                } else {
                    const style = this.state.selectedIndex === i ? styles.base : [styles.base,styles.gone];
                    return (
                        <View
                            key={'view_' + i}
                            style={style}>
                            {child}
                        </View>
                    );
                }
            }
        );

        return (
            <View style={[styles.container,this.props.style]}>
                <View style={styles.content}>
                    {contentViews}
                </View>

                <View style={styles.horizonLine}/>

                <View style={styles.nav}>
                    {navs}
                </View>
            </View>
        );
    }

    componentDidMount() {
        let page = this.props.defaultPage;

        if (page >= this.props.children.length || page < 0){
            page = 0;
        }

        this.update(page);
    }

    update(index) {
        this.visibles[index] = true;
        this.setState({
            selectedIndex: index,
        });

        if (this.props.onItemSelected) {
            this.props.onItemSelected(index);
        }
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
        backgroundColor: '#f3f3f3',
    },
    navItem: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 6,
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
    horizonLine: {
        backgroundColor: '#adadad',
        height: 1,
        width: Dimensions.get('window').width,
    },
    badgeNoNumber: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: -4,
        left: 24,
        position: 'absolute',
        width: 10,
        height: 10,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#ffffff',
        backgroundColor: '#ff0000',
    },
    badgeWithNumber: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: -4,
        left: 24,
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        backgroundColor: '#ff0000',
    },
    badgeText: {
        alignSelf: 'center',
        fontSize: 11,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
