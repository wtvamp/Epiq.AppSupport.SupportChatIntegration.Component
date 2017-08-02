import React from 'react';
import ReactDOM from 'react-dom';
import SupportChatIntegrationComponent from 'SupportChatIntegrationComponent.jsx';
import $ from 'jquery';

$.connection.hub.url = "http://sayhivm20170801035834.azurewebsites.net/signalr";

ReactDOM.render(
    <SupportChatIntegrationComponent />,
    document.getElementById('Content')
);