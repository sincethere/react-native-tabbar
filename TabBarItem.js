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

export default class TabBarItem extends Component {

    render() {
        let child = this.props.children;

        if (child.length && child.length > 0) {
            throw new Error("onlyChild must be passed a children with exactly one child.");
        }

        return (
            <View style={styles.weight}>
                {child}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    weight: {
        flex: 1,
    }
});
