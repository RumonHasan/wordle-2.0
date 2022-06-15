import React,{createContext, useEffect, useState} from 'react';
import { defaultBoard, generateRandomWord, checkLetter, 
    wordList, hintWarningMessage, wordNotPresentOnTheList } from './Utils';
import { fetchWordClue, associationWordOptions } from './ClueApi';
import './AppStyles.css';
import Board from './components/Board'; // primary board component
import KeyBoard from './components/Keyboard';
import HintBoard from './components/HintBoard';
import Popup from './components/Popup';
import Footer from './components/Footer';
import VictoryPanel from './components/VictoryPanel';
import LossPanel from './components/LossPanel';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export const GlobalContext = createContext(); // main context

const App = ()=>{
    const [answerWord, setAnswerWord] = useState(generateRandomWord());// state for answer;
    const [definition, setDefinition] = useState('');
    const [associationWords, setAssociationWords] = useState([]);
    const [loader, setLoader] = useState(false);
    const [board, setBoard] = useState(defaultBoard);
    const [gameOver, setGameOver] = useState(false);
    const [displayPop, setDisplayPop] = useState(false);
    const [displayVictoryPanel, setDisplayVictoryPanel] = useState(false);
    const [displayLossPanel, setDisplayLossPanel] = useState(false);
    const [displayHint, setDisplayHint] = useState(false);
    const [hintCounter, setHintCounter] = useState(0);
    const [hintView, setHintView] = useState(false);
    const [activeLetterClass, setActiveLetterClass] = useState(false);
    const [toastifyMessage, setToastifyMessage] = useState('');
        // keys used
    const [correctClass, setCorrectClass] = useState([]);
    const [disabledKeyboardLetters, setDisabledKeyboardLetters] = useState([]);// to store used keys
    const [almostDisabled, setAlmostDisabled] = useState([]);
    // state for controlling the current indexes of rows and columns
    const [currentTry, setCurrentTry] = useState({rowPosition: 0, letterPosition: 0}); 

    // temp function to restart the browser
    const replayGame = ()=>{
        if(gameOver){
            window.location.reload()
            setGameOver(false);
        }
    }
    // get the associated word clue
    useEffect(()=>{
        setLoader(true);
        const fetchDataAssociation = async ()=>{
            const associateCollection = await fetchWordClue(`https://twinword-word-graph-dictionary.p.rapidapi.com/association/?entry=${answerWord.toLowerCase()}`, associationWordOptions);
            const assocWords = associateCollection.assoc_word;
            for(let i = 0; i < assocWords.length; i++){
                setAssociationWords((prevAssocWords)=> [...prevAssocWords, assocWords[i]]);
            }
        }
        fetchDataAssociation();
        return (()=>{
            setLoader(false);
        })
    },[]);

    // initial popup 
    useEffect(()=>{
        setHintView(true);
        toast(hintWarningMessage());
        const timeOut = setTimeout(()=>{
            setHintView(false);
        },5000)
        return (()=>{
            clearTimeout(timeOut);
        })
    },[]);

    // function to enter a letter
    const onSelectLetter = (keyVal)=>{
        if(gameOver){
            return;
        }
        if(currentTry.letterPosition > 4){ // limiting letter entry beyond the letter
            return;
        }
        if(checkLetter(keyVal)){
            const newBoard = [...board];
            newBoard[currentTry.rowPosition][currentTry.letterPosition] = keyVal.toUpperCase();
            setBoard(newBoard);
            setCurrentTry({...currentTry, letterPosition: currentTry.letterPosition + 1}); // switching to the next letter
        }
    };
    // deleting the letter from the end of the matrix
    const onDeleteLetter = ()=>{
        if(gameOver){
            return;
        }
        if(currentTry.letterPosition === 0){
            return;
        } 
        const newBoard = [...board];
        newBoard[currentTry.rowPosition][currentTry.letterPosition - 1] = ''; // starting from the last index
        setBoard(newBoard);
        setCurrentTry({...currentTry, letterPosition: currentTry.letterPosition - 1});
    }

    // handling when all the letter is entered

    const onEnterLetter = ()=>{
        // only can enter if the letter position is at the end
        if(currentTry.letterPosition !== 5){
            return;
        }
        // getting the word from the board
        let guessedWord = '';
        for(let i = 0; i < currentTry.letterPosition; i++){
            guessedWord += board[currentTry.rowPosition][i];
        }
        // check parity
        if(guessedWord.toLowerCase() === answerWord.toLowerCase()){
            setDisplayLossPanel(false);
            setDisplayVictoryPanel(true);
            setGameOver(true);
        }
        // checking whether the word is contained within the dataset or not
        if(wordList.includes(guessedWord)){
            setCurrentTry({...currentTry, rowPosition: currentTry.rowPosition + 1, letterPosition: 0})// switches to the next row if there is word in the set
        }else{
            wordNotPresentOnTheList();
        }

        // checking if the all the turns are used up and the final world is equal to answer word or not
        let finalGuessedWord = '';
        if(currentTry.rowPosition >= 5){
            for(let finalIndex = 0; finalIndex < currentTry.letterPosition; finalIndex++){
                finalGuessedWord += board[currentTry.rowPosition][finalIndex];
            }
            if(finalGuessedWord !== answerWord){
                setDisplayLossPanel(true);
                setGameOver(true);
            }
        }
    }

    return (
        <GlobalContext.Provider value={{
            answerWord,
            setAnswerWord,
            loader,
            setLoader,
            onSelectLetter,
            currentTry,
            setCurrentTry,
            board,
            setBoard,
            onEnterLetter,
            onDeleteLetter,
            activeLetterClass,
            // keyboard states
            disabledKeyboardLetters,
            setDisabledKeyboardLetters,
            almostDisabled,
            setAlmostDisabled,
            correctClass,
            setCorrectClass,
            displayPop,
            setDisplayPop,
            associationWords,
            setAssociationWords,
            displayHint,
            setDisplayHint,
            hintCounter,
            setHintCounter,
            displayVictoryPanel,
            setDisplayVictoryPanel,
            replayGame,
            displayLossPanel,
            setDisplayLossPanel
    
        }}>
        <div className={displayPop ? 'popup-container active': 'popup-container'}>
            <Popup/>
        </div>
        <div className={displayVictoryPanel ? 'victory-panel-container active': 'victory-panel-container'}>
            <VictoryPanel/>
        </div>
        <div className={displayLossPanel ? 'loss-panel-container active': 'loss-panel-container'}>
            <LossPanel/>
        </div>
        <ToastContainer
            position={hintView ? 'top-center':"top-right"}
            autoClose={hintView ? 10000: 5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            toastStyle={{backgroundColor:'black', color:'white', border:'2px solid gray', width: hintView && '460px', whiteSpace:'nowrap'}}
        />
        <div className='game'>
            <div className='menu-bar'>
                <h4 className='menu-header'>Wordle <span>2.0</span></h4>
            </div>
                    <div className='game-board'>
                        <div className='game-section'>
                            <Board/>
                            <KeyBoard/>
                        </div>
                        <div className='extra-boards'>
                            <HintBoard/>
                        </div>
                    </div>
            </div>
            <Footer/>
        </GlobalContext.Provider>
    )

}
export default App;













