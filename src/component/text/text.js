import { View, Text as RNText, StyleSheet } from 'react-native'
import React from 'react'
import { presets } from './text.preset'

export default function Text({ children, preset = "default", style }) {
    const textSyles = StyleSheet.compose(presets[preset], style)
    return (
        <View>
            <RNText style={textSyles}>{children}</RNText>
        </View>
    )
}