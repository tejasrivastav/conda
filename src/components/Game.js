import React, {useEffect, useState} from 'react';

const SCORING = [
//   R  P   S
    [0, -1, 1], 
    [1, 0, -1],
    [-1, 1, 0]
]
const GameOptions = [
    {
        name: "Rock",
        id: 0
    },
    {
        name: "Paper",
        id: 1
    },
    {
        name: "scissors",
        id: 2
    }
]

const Game = (props) => {
    const [trail, setTrail] = useState([]);
    const [players, setPlayer] = useState({});
    const [round, setRound] = useState(1);
    const [score, setScore] = useState({});
    const [selections, setSelections] = useState({});

    let { player } = props;
    let computer = {
        id: 1,
        name: "Computer"
    };
    useEffect(()=>{
        
        setPlayer({
            ...players, 
            [player.id]: player,
            [computer.id]: computer
        });
    }, [player]);

    function play() {
        // For a multiplayer env sum all the player selections
        let all = Object.keys(selections).reduce((prev,curr)=>{
            let pick = selections[curr].id
            prev[pick] ?  prev[pick]++ : prev[pick] = 1
            return prev
        }, {})
        
        if(Object.keys(all).length === 1) {
            console.log("Tie")
        } else {
            // Based on the players selection add or subtract based on the selection
            let allScores = {...score}
            Object.keys(selections).forEach(selection=>{
                let el = selections[selection];
                let pick = SCORING[el.id];
                let score = 0;
                Object.keys(all).forEach(id=>{
                    if(el.id != id) {
                        let count = all[id]; // all going to be 1 in single player mode
                        score += pick[id]*count;
                    }
                })
                let prevScore = allScores[selection] ? allScores[selection] : 0
                allScores[selection] = prevScore + score
            });
            setScore(allScores);
            setTrail([
                ...trail,
                [round, selections]
            ])
            let newRound = round + 1;
            setRound(newRound);
        }
    }
    return (
        <div>
            <div>Round : {round}</div>
            <div className="d-flex" style={{
                "justifyContent": "space-evenly"
            }}>
                {Object.keys(players).map((id)=>{
                    return (
                        <div key={id}>
                            <div>{players[id].name}</div>
                            <div>Score: {score[id]}</div>
                            <div>Selection: {selections[id] ? selections[id].name : null}</div>
                            <div className="d-flex flex-column">
                            { id != 1 ? 
                            GameOptions.map((option)=>{
                                return <button className="btn btn-primary m-3"
                                    key={option.id} 
                                    onClick={()=>{setSelections({
                                        ...selections, 
                                        [id]: option,
                                        [computer.id]: GameOptions[Math.floor(Math.random()*GameOptions.length)]})
                                    }}>{option.name}</button>
                            }) : null }
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='row'>
            <button className="btn btn-primary" onClick={()=>{play()}}>Play</button>
            </div>
        </div>
    );
}

export default Game;
