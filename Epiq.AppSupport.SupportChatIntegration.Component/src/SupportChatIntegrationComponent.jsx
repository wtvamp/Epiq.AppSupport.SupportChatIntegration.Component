import React from 'react';
import dotnetify from 'dotnetify';

class SupportChatIntegrationComponent extends React.Component {
    constructor(props) {
        super(props);

        //dotnetify.react.connect("SayHiVM", this);
		this.state = { Greetings: "", ServerTime: "" };		
	}

	

	render() {
		var style = {
			'background-color': 'green',
			'border-radius': '5px'
		};

        return (
			<button style={style}>Send</button>
        );
    }
}



export default SupportChatIntegrationComponent;