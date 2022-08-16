import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "../App";
import { useContext, useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import Spinner from "./subcomponents/Spinner";

const Leaderboard = ()=>{
    const {setDisplayLeaderboard, leaderboard, loader} = useContext(GlobalContext);
    // confetti
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [displayConfetti, setDisplayConfetti] = useState(false);
    const confettiRef = useRef(null);

    // data
    const legends = leaderboard.sort((a, b)=> b.score - a.score);

    useEffect(() => {
        if(!loader){
            setHeight(confettiRef.current.clientHeight);
            setWidth(confettiRef.current.clientWidth);
        }
      }, [loader]);

    // basic styles
    const crossButtonStyles = {
        cursor:'pointer',
        padding: '0.1rem',
        margin: '20px',
        fontSize: '40px',
        background:'transparent',
        border:'none',
        color:'white',
    }
    const closeLeaderboard ={
        position:'absolute',
        right: 0,
    }
    const headerStyles ={
        color:'white',
        fontWeight:'bold',
        letterSpacing:'5px',
        margin:10,
    }
    const containerStyle = {
        position:'relative',
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
    }
    const contentStyle = {
        color:'white',
        fontSize:'20px',
        padding: 20,
        width:'100%',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        maxHeight: '600px',
        overflow:'auto',
    }
    const playerStyle ={
        border: '2px solid gray',
        marginTop:'10px',
        padding:'1rem'
    }
    const leaderboardContentStyles = {
     
    }
    return (
        <div className="leaderboard-box">
            {loader ? <Spinner/> :
            <div style={containerStyle} ref={confettiRef} onMouseEnter={()=> setDisplayConfetti(true)}
                onMouseLeave={()=>setDisplayConfetti(false)}>
                <div style={closeLeaderboard}>
                    <button onClick={()=> setDisplayLeaderboard(false)} style={crossButtonStyles}>
                        <FaTimes/>
                    </button>
                </div>
                <div style={leaderboardContentStyles}>
                    <h2 style={headerStyles}>
                        LEGENDS!! 60 Points on 1st try!!
                    </h2>
                    <div style={contentStyle}>
                        {legends.map((legend, index)=>{
                            const {score, answer, player, Timestamp} = legend;
                            const scoreStyle = {
                                color: score < 60 ? '#ffa500': 'red'
                            }
                            return (
                            <div key={Timestamp} style={playerStyle}>
                                <h5> Player: {player}</h5>
                                <h5 style={{color:'yellow'}}>Score: <span style={scoreStyle}>{score}</span> / 60</h5>
                                <h5 style={{color:'#5ced73'}}>Answer Word: {answer}</h5>
                            </div>
                            )
                        })}
                </div>
                </div>
             
                <Confetti
                    recycle={displayConfetti}
                    numberOfPieces={40}
                    width={width}
                    heigh={height}
                />
            </div>}
        </div>
    )
};

export default Leaderboard;