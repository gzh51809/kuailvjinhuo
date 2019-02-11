import React from 'react';
import Header from './Header';
import Homebody from './Homebody';
import Backtop from './Backtop';
class Home extends React.Component{
	 render(){
        return (
            <div>
             <Header></Header>
             <Homebody></Homebody>
             <Backtop></Backtop>
            </div>
        )
    }
}

export default Home;