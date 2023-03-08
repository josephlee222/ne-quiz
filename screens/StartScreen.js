import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, TextInput, Appbar, Card, Paragraph } from 'react-native-paper';


function StartScreen({ navigation }) {

    const [data, setData] = useState([])

    const getQuizzes = async () => {
        const response = await fetch('https://facebooklee53.pythonanywhere.com/quiz')
        const json = await response.json()
        setData(json)
    }
    
    useEffect(() => {getQuizzes()}, [])

    console.log(data)
    
    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Quiz App" />
            </Appbar.Header>
            <ScrollView style={styles.container}>
                {data.map((item) => (
                    <Card style={{marginBottom: 8}}>
                        <Card.Cover source={{ uri: item["image_url"]}} />
                        <Card.Title title={item["title"]} subtitle="Quiz!" />
                        <Card.Content>
                            <Paragraph>{item["description"]}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => navigation.navigate("Quiz", {id: item["id"]})}>
                                Start!
                            </Button>
                        </Card.Actions>
                    </Card>
                ))}
            </ScrollView>
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