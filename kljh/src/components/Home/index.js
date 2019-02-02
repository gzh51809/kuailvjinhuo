import React from 'react';
import Header from './Header';
import Homebody from './Homebody';
class Home extends React.Component{
	 render(){
        return (
            <div>
             <Header></Header>
             <Homebody></Homebody>
            </div>
        )
    }
}

export default Home;