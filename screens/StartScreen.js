import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Appbar, Card, Paragraph } from 'react-native-paper';


function StartScreen({navigation}) {
    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="NE Quiz App" />
            </Appbar.Header>
            <View style={styles.container}>
                <Card>
                    <Card.Cover source={require('../imgs/cabinet.jpg')} />
                    <Card.Title title="NE Quiz!" subtitle="Welcome to the quiz!"/>
                    <Card.Content>
                        <Paragraph>This quiz tests your knowledge on Singapore history and common knowledge. Touch the button to start!</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => navigation.navigate("Quiz")}>
                            Start!
                        </Button>
                    </Card.Actions>
                </Card>
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
    }
});

export default StartScreen