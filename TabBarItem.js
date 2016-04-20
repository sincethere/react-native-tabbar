/**
 *  TabBarItem
 */
'use strict'

import React, {
    StyleSheet,
    Component,
    View,
    Text,
} from 'react-native';
import EventEmitter from './TabEventEmitter';

export default class TabBarItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentVisible: false,
        };

        this.listener = EventEmitter.addListener("tabBarWillChangeSelected",(cProps) => {
            if (!this.state.contentVisible && cProps == props) {
                this.setState({
                    contentVisible: true,
                });
            }
        });
    }

    render() {
        if (this.state.contentVisible) {
            let child = this.props.children;

            if (child.length && child.length > 0) {
                throw new Error("onlyChild must be passed a children with exactly one child.");
            }

            return (
                <View style={styles.weight}>
                    {child}
                </View>
            );
        } else {
            return <View />
        }
    }

    componentWillUnmount() {
        this.listener.remove();
    }
}

const styles = StyleSheet.create({
    weight: {
        flex: 1,
    }
});
