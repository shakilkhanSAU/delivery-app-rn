import { View, StyleSheet, StatusBar, Image, Pressable } from 'react-native'
import React from 'react'
import Text from '../component/text/text'
import { colors } from '../theme/color'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';

export default function Details() {
    return (
        <>
            <StatusBar barStyle="light" />
            <View style={styles.AndroidSafeArea}>
                <Image style={styles.homeCardUpper} source={require('../image/Media.png')}></Image>

                <View style={styles.homeCardLower}>
                    <View style={styles.deliveryTitle}>
                        <Text preset='h2'>Boston Lettuce</Text>
                        <View style={styles.price}>
                            <Text preset='h3' style={{ fonSize: 30 }}>32.5 </Text><Text style={{ fontSize: 28, color: colors.grey }}>$ / Piece</Text>
                        </View>
                        <View>
                            <Text style={{ color: colors.primaryBtn }}>~ 150 gr / Piece</Text>
                        </View>
                    </View>
                    <View style={styles.deliveryContent}>
                        <Text preset='h4'>Spain</Text>
                        <Text style={{ color: colors.grey, paddingTop: 12 }}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.
                        </Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <Pressable onPress={() => { alert('Oh, be patient! function of this button is Under Development... Md. Shakil Khan') }} style={styles.loveIcon}>
                            <Image source={require('../image/love.png')} />
                        </Pressable>
                        <Pressable onPress={() => {
                            alert('oh sorry! this is under development.... md. shakil khan')
                        }} style={styles.primaryBtn}>
                            <AntDesign name="shoppingcart" size={22} color="white" />
                            <Text style={{ color: colors.white, fontSize: 20, marginLeft: 10 }}>Add To Card</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    homeCardUpper: {
        flex: .8,
        marginBottom: -25,
        marginTop: -30,
        width: '100%'
    },
    homeCardLower: {
        flex: 1.3,
        backgroundColor: colors.backgroundWhite,
        borderTopEndRadius: spacing[8],
        borderTopStartRadius: spacing[8],
        padding: spacing[8],
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
        marginTop: spacing[3],
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deliveryContent: {
        marginTop: spacing[8],
        lineHeight: 23
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: spacing[10]
    },
    primaryBtn: {
        width: '75%',
        alignItems: 'center',
        padding: spacing[4],
        backgroundColor: colors.primaryBtn,
        borderRadius: spacing[2],
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loveIcon: {
        width: '22%',
        alignItems: 'center',
        padding: spacing[4],
        backgroundColor: colors.white,
        borderRadius: spacing[2]
    }
})