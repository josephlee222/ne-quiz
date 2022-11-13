import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Appbar, Card, Paragraph, Title, ProgressBar, Text, MD2Colors } from 'react-native-paper';

function ResultScreen({navigation}) {

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={navigation.goBack} />
                <Appbar.Content title="Quiz" />
            </Appbar.Header>
            <View style={styles.container}>
                <Text>Quiz Finish.</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    loginInput: {
        width: '100%',
        marginBottom: 8
    },
    loginButton: {
        marginBottom: 8
    },

    cardMargin: {
        marginBottom: 16
    },

    scoreView: {
        marginTop: 8
    },

    scoreText: {
        marginTop: 4,
        color: MD2Colors.grey500
    }
});

export default ResultScreen