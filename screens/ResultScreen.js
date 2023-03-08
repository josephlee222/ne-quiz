import { StyleSheet, View } from 'react-native';
import { Button, Appbar, Card, Title, Text, MD2Colors } from 'react-native-paper';

function ResultScreen({route, navigation}) {

    const {score} = route.params

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={navigation.popToTop} />
                <Appbar.Content title="Quiz Results" />
            </Appbar.Header>
            <View style={styles.container}>
                <Card style={{marginBottom: 16}}>
                    <Card.Content>
                        <Title>Quiz Finished!</Title>
                        <View>
                            <Text>{"Final Score: " + (score * 100) + "%"}</Text>
                        </View>
                    </Card.Content>
                </Card>
                <Button onPress={navigation.popToTop}>Back to Home</Button>
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