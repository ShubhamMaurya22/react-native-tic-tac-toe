import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable
} from 'react-native';

import Sound from 'react-native-sound';

import Snackbar from 'react-native-snackbar';
import Icons from './components/icons';

// import Icon from 'react-native-vector-icons/FontAwesome'
// import { Icon } from 'react-native-vector-icons/Icon';

function App(): JSX.Element {
  const [isCross, setIsCross] = useState<Boolean>(true);
  const [gameWinner, setGameWinner] = useState('')
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  const gameOver = () => {
    setIsCross(false)
    setGameWinner('')
    setGameState(new Array(9).fill('empty', 0, 9))
  }

  const checkWinner = () => {
    //  checking  winner of the game
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  }

  const onchangeItem = (position: number) => {
    if(gameWinner){
        return Snackbar.show({
          text : gameWinner,
          backgroundColor: 'green',
          textColor: 'white'
        })
    }

    if(gameState[position] === "empty"){

      gameState[position] = isCross ? 'circle': 'cross'
      setIsCross(!isCross)
    }else{
      return Snackbar.show({
        text: 'position is already asign ',
        backgroundColor: 'red',
        textColor: 'white'
        
      })
    }
   checkWinner();
  }

  // sound code start here 
  
  const playCross = () => {
    var sound = new Sound('ding.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
    
      // Play the sound with an onEnd callback
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
          console.log('volume' + sound.getVolume())
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      })
    })
  
  }

  const playCircle = () => {
    var sound = new Sound('slashkut.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
    
      // Play the sound with an onEnd callback
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      })
    })
  
  }

  // sound code end here 

  return (
    <SafeAreaView>
      <StatusBar />
      {gameWinner ? (
        <View style={[styles.header, styles.playerInfo]}>
          <Text style={styles.resultText}>{gameWinner}</Text>
        </View>
      ) : (
        <View style={[
          styles.playerInfo,
          isCross ? styles.playerX : styles.playerO
        ]}>
          <Text style={[
            styles.playerTurnText,
            ]}>
            Player {isCross ? 'X' : 'O' } ' turn
          </Text>
        </View>
      )}

      {/* Grid Start here  */}
      <FlatList 
      numColumns= {3}
      data= {gameState}
      style={styles.grid}
      renderItem = {({item, index}) => (
        <Pressable
        style={styles.card}
        key={index}
        onPress= {() => {onchangeItem(index); isCross ? playCross() : playCircle() }}
        // onPressIn={() => }
        >
          <Icons name={item}/>    
        </Pressable>
      )}
      />
     <Pressable
     onPress={gameOver}
     style={styles.reloadBtn}
     >
      <Text style={styles.reloadText}>
       {gameWinner ? 'Play The Game' : 'Restart The Game'}
      </Text>
     </Pressable>
    </SafeAreaView>
  );
}

 const styles = StyleSheet.create({
    playerInfo: {
      height: 56,
    
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderRadius: 10,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      shadowRadius: 1.5,      
    },
    resultText: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textTransform: 'capitalize'
    },
    header: {
      backgroundColor: '#38CC77',
    },
    playerTurnText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 20
    },
    playerX: {backgroundColor: '#38CC77'},
    playerO: {backgroundColor: '#F7CD2E'},
    card: {
      height: 100,
      width: '33.33%',
  
      alignItems: 'center',
      justifyContent: 'center',
  
      borderWidth: 1,
      borderColor: '#333',
    },
    grid: {margin: 12,},
    reloadBtn: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
    },
    reloadText: {
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: '#343434',
      color: '#FFFFFF',
      padding: 12,
      marginTop: 10,
      borderRadius: 10
    }
 })

export default App;
