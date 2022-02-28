import React, { useState } from 'react';
import "./Home.css";
import {Container} from "reactstrap";
import Game from '../../components/Game';

const Home = () => {
    let [ player , setPlayer ] = useState({});
    let [ start, setStart] = useState(false)
    
    return (
        <React.Fragment>
            <Container>
                <div className="App container-fluid bg-light d-flex flex-column">
                    <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-primary">Single Player</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-secondary" disabled>Multi Player</button>
                        </div>
                    </div>
                    {!start ? 
                        <div className="row" style={{
                            "flex": 1,
                            "alignItems": 'center'
                        }}>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="playerName" className="form-label">Player Name</label>
                                    <input type="text" id="playerName" className="form-control"
                                        value={player.name} onChange={(e)=>setPlayer({name: e.target.value, id: Math.random() })}/>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary" onClick={()=>{setStart(true)}}>Start</button>
                                </div>
                            </form>
                        </div>
                    : <Game player={player} mode={1} /> }
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Home;
