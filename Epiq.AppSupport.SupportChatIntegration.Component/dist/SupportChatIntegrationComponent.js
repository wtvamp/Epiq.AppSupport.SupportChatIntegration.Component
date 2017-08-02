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
            this.state.showChat && React.createElement(SupportChatComponent, { type: '1', image: 'https://www.redbulletin.com/sites/default/files/styles/sharing-thumbnail/public/images/article-thumbnail-smartphone/joker_1.jpg?itok=gwMU6YAY' })
        );
    }
}

export default SupportChatIntegrationComponent;
