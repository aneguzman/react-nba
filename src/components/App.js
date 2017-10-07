import React, { PropTypes } from 'react';
import Header from './common/Header';

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <div id="mainContent" >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;