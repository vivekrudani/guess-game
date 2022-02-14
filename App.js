import React, {useState} from 'react';

import {StyleSheet, View} from 'react-native';


import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';




export default function app() {
  const [userNumber, setuserNumber] = useState();
  const [guessRound, setGuessRounds] = useState(0);


  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setuserNumber(null);
  };

  const startGameHandler = selectedNumber => {
    setuserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let Content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber & guessRound <= 0) {
    Content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    Content = (
      <GameOverScreen
        roundsNumber={guessRound}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {Content}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
