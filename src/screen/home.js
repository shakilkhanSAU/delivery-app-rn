import { View, StyleSheet, StatusBar, Image, Pressable } from 'react-native'
import React from 'react'
import Text from '../component/text/text'
import { colors } from '../theme/color';
import { spacing } from '../theme/spacing';

export default function Home({ navigation }) {
    return (
        <View style={styles.AndroidSafeArea}>
            <View style={styles.homeCardUpper}>
                <View style={styles.logo}>
                    <Image source={require('../image/D.png')}></Image>
                </View>
            </View>
            <View style={styles.homeCardLower}>
                <View style={styles.logo1}>
                    <Image source={require('../image/Vector.png')}></Image>
                </View>
                <View style={styles.deliveryTitle}>
                    <Text preset='h1'>NON-CONTACT</Text>
                    <Text style={{ marginTop: -10 }} preset='h1'>DELEVERY</Text>
                </View>
                <Text style={styles.deliveryContent}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
                </Text>
                <Pressable onPress={() => { navigation.navigate('Details') }} style={styles.primaryBtn}>
                    <Text style={{ color: colors.white, fontSize: 20 }}>Order Now</Text>
                </Pressable>
                <Pressable onPress={() => { alert('Oh, be patient! function of this button is Under Development... Md. Shakil Khan') }} style={styles.secondaryBtn}>
                    <Text style={{ fontSize: 20 }}>DISMISS</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    homeCardUpper: {
        flex: .5,
        backgroundColor: colors.background
    },
    homeCardLower: {
        flex: 1.6,
        backgroundColor: colors.backgroundWhite,
        borderTopEndRadius: spacing[8],
        borderTopStartRadius: spacing[8],
        // justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: colors.logo,
        margin: spacing[6],
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo1: {
        height: 90,
        width: 90,
        borderRadius: 45,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: spacing[10],
    },
    deliveryTitle: {
        alignItems: 'center',
        marginTop: spacing[3]
    },
    deliveryContent: {
        textAlign: 'center',
        marginTop: spacing[8],
        marginHorizontal: spacing[11],
        color: colors.grey,
        lineHeight: 23
    },
    primaryBtn: {
        width: '80%',
        alignItems: 'center',
        padding: spacing[4],
        backgroundColor: colors.primaryBtn,
        marginTop: spacing[10],
        borderRadius: spacing[2]
    },
    secondaryBtn: {
        width: '80%',
        alignItems: 'center',
        padding: spacing[4],
        backgroundColor: colors.white,
        marginTop: spacing[3],
        borderRadius: spacing[2]
    }
});
