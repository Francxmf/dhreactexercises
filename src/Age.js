import React from 'react';

export class Age extends React.Component {
    render(){
        return <div>
            {this.props.age > 18 ? (<p>Your are {this.props.age} years old.</p>) : (<p>You are very young!</p>)}
        </div>
    }
}


