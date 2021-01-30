import React from 'react';
import Home from './Home';
import Admin from './Admin';
import Student from './Student';
import Navirtem from './Navirtem';
import Contact from './contact';
import { Switch,Route} from 'react-router-dom';

const Common = () =>{
    return(
        <>
         <Navirtem />
        <Switch>
                <Route exact path='/'   component={Home} /> 
                <Route exact path='/home'   component={Home} /> 
                <Route exact path='/admin'   component={Admin} />
                <Route exact path='/student' component={Student} />
                <Route exact path='/contact' component={Contact} />
                {/* <Route exact component={Error} /> */}
        </Switch>
        </>
    );
}

export default Common;