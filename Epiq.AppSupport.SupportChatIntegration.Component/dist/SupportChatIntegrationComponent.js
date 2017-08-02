import React from 'react';
import SupportButtonComponent from 'epiq-appsupport-chatbutton-component';
import SupportChatComponent from 'epiq-appsupport-chatwindow-component';
import 'bootstrap/dist/css/bootstrap.css';

class SupportChatIntegrationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showChat: false };

        this.showChatWindow = this.showChatWindow.bind(this);
    }

    showChatWindow() {
        const { showChat } = this.state;
        this.setState({ showChat: !showChat });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(SupportButtonComponent, { onClick: this.showChatWindow }),
            this.state.showChat && React.createElement(SupportChatComponent, null)
        );
    }
}

export default SupportChatIntegrationComponent;
