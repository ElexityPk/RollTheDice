import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import DiceOne from '../assets/dice1.png';
import DiceTwo from '../assets/dice2.png';
import DiceThree from '../assets/dice3.png';
import DiceFour from '../assets/dice4.png';
import DiceFive from '../assets/dice5.png';
import DiceSix from '../assets/dice6.png';

const Dice = ({ImageUrl}) => {
  return (
    <View>
      <Image style={styles.ImageStyle} source={ImageUrl} />
    </View>
  );
};

export default function App() {
  const [diceValue, setDiceValue] = useState(null);
  const [diceImage, setDiceImage] = useState(DiceOne);

  const handleRollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;

    switch (randomValue) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
    setDiceValue(randomValue);
  };
  console.log(diceImage);

  return (
    <>
      <View style={styles.container}>
        <Dice ImageUrl={diceImage} />
        <Text style={styles.result}>{`You rolled a ${diceValue}!`}</Text>

        <TouchableOpacity style={styles.button} onPress={handleRollDice}>
          <Text style={styles.buttonText}>Roll</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ImageStyle: {
    width: 200,
    height: 200,
  },
});
