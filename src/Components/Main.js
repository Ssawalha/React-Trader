import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Login/Login';
import Logout from './Home/Logout';
import UserHome from './Home/UserHome';
import Positions from './Positions/Positions';
import PositionsFor from './Positions/PositionsFor';
import Buy from './Buy/Buy';
import Sell from './Sell/Sell';
import Trades from './Trades/Trades';
import TradesFor from './Trades/TradesFor';
import Lookup from './Lookup/Lookup';
import Register from './Register/Register';
import Settings from './Settings/Settings';

export default function MainContent(props) {
    //when you wrap routes with switch, then only one will match

    return props.apiKey ? (
            <Switch> 
                {/* render(below) will return a new component when the route path matches */}
                <Route exact path="/" render = { (newProps) => {
                    return <UserHome {...newProps} apiKey={props.apiKey}/>
                }
                }/>

                <Route exact path="/lookup" render= {(newProps)=>{
                    return <Lookup/>
                }}
                />

                {/* Route for logging out */}
                <Route exact path='/logout' render = { (newProps) => 
                    // RENDER IS A FUNCTION THAT NEEDS TO BE DEFINED AS SUCH:
                    // IT ALWAYS HAS PROPS AS AN ARGUMENT 
                    // and will return a component attached to a route (example <Home)

                    <Logout {...newProps} setApiKey={props.setApiKey}/>
                }  
                />

                <Route exact path='/positions' render = { (newProps) => {
                    return <Positions {...newProps} apiKey={props.apiKey}/>
                }
                }/>

                <Route exact path='/positions/:ticker' render = { (newProps) => {
                                           // ^ allows us to access a ticker variable in PositionsFor
                    return <PositionsFor {...newProps} apiKey={props.apiKey}/>
                }
                }/>

                <Route exact path='/trades' render = { (newProps) => {
                    return <Trades {...newProps} apiKey={props.apiKey}/>
                }
                }/>

                <Route exact path='/trades/:ticker' render = { (newProps) => {
                                        // ^ allows us to access a ticker variable in TradesFor
                    return <TradesFor {...newProps} apiKey={props.apiKey}/>
                }
                }/>

                <Route exact path='/buy' render = { (newProps) => {
                    return <Buy {...newProps} apiKey={props.apiKey}/>
                }
                }/>

                <Route exact path='/sell' render = { (newProps) => {
                    return <Sell {...newProps} apiKey={props.apiKey}/>
                }
                }/>

                <Route exact path='/settings' render = { (newProps) => {
                    return <Settings {...newProps} apiKey={props.apiKey}/>
                }}/>

                <Route render = {(props)=>(<div>404 not found</div>)} />
            </Switch>

    ) : (
        <Switch>
            <Route exact path="/" render = { (newProps) => {                                             
                return <Home {...newProps} apiKey={props.apiKey} setApiKey={props.setApiKey}/>
            } 
            }/>

            <Route exact path="/lookup" render= {(newProps)=>{
                return <Lookup/>
            }}
            />

            <Route exact path="/register" render = { (newProps)=>{
                return <Register {...newProps} />
            }}/>            
        </Switch>
    );
};