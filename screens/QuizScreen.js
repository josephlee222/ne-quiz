import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Appbar, Card, Paragraph, Title, ProgressBar, Text, MD2Colors } from 'react-native-paper';


function QuizScreen({navigation}) {

    // Component state
    const [questions, setQuestions] = useState([
        {
            "question": "Who was the first prime minister of Singapore?",
            "answer": "Lee Kuan Yew",
            "image": require("../imgs/cabinet.jpg")
        },
        {
            "question": "When did Singapore gained independence?",
            "answer": "1965",
            "image": require("../imgs/sg_out.jpg")
        },
        {
            "question": "Who was the first president of Singapore?",
            "answer": "Yusof Ishak",
            "image": require("../imgs/Yusof_Ishak.jpg")
        },
    ])
    const [questionNumberText, setQuestionNumberText] = useState("Question 0/0")
    const [questionNumber, setQuestionNumber] = useState(0)
    const [questionText, setQuestionText] = useState("Placeholder question.")
    const [questionImage, setQuestionImage] = useState(require("../imgs/cabinet.jpg"))
    const [scoreValue, setScoreValue] = useState(0)
    const [submitButtonText, setSubmitButtonText] = useState("Placeholder submit button")
    const [answerText, setAnswerText] = useState("bruh")
    const [correctQuestion, setCorrectQuestion] = useState(0)
    const [maxQuestion, setMaxQuestion] = useState(questions.length)

    // Array shuffle function
    function shuffleQuestions(array) {
        let currentIndex = array.length, randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    function getQuestion() {
        // Get question to display
        console.log(questionNumber)
        setQuestionText(questions[questionNumber].question)
        setQuestionNumberText("Question " + (questionNumber + 1) + "/" + maxQuestion)
        setQuestionImage(questions[questionNumber].image)
        if ((questionNumber + 1) == maxQuestion) {
            setSubmitButtonText("Finish Quiz")
        } else {
            setSubmitButtonText("Next Question")
        }
    }

    function checkQuestion() {
        // Check whether question is correct or not
        if (questions[questionNumber].answer == answerText) {
            setCorrectQuestion(correctQuestion + 1)
        }

        if ((questionNumber + 1) == maxQuestion) {
            // Finish quiz here
            navigation.navigate("Result", {score: scoreValue})
        } else {
            // Continue with the next question
            setQuestionNumber(questionNumber + 1)
        }
    }

    useEffect(() => {
        // Shuffle the questions array
        setQuestions(shuffleQuestions(questions))
        getQuestion()
        console.log(JSON.stringify(questions))
        console.log(maxQuestion)
    }, [])

    useEffect(() => {
        setScoreValue(correctQuestion / maxQuestion)
        console.log("Correct answer: " + scoreValue)
        getQuestion()
    }, [questionNumber])

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={navigation.goBack} />
                <Appbar.Content title="Quiz" />
            </Appbar.Header>
            <View style={styles.container}>
                <Card style={styles.cardMargin}>
                    <Card.Content>
                        <Title>{questionNumberText}</Title>
                        <View style={styles.scoreView}>
                            <ProgressBar progress={scoreValue}/>
                            <Text style={styles.scoreText}>{"Score: " + (scoreValue * 100) + "%"}</Text>
                        </View>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Cover source={questionImage} />
                    <Card.Title title={"Question " + (questionNumber + 1)} subtitle={questionText}/>
                    <Card.Content>
                        <TextInput onChangeText={newText => setAnswerText(newText)} placeholder='Write your answer...'></TextInput>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={checkQuestion}>
                            {submitButtonText}
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

export default QuizScreen