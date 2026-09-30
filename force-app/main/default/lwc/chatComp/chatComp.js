import { LightningElement } from 'lwc';

export default class ChatComp extends LightningElement {

    messages = [
    {
        id: 1,
        text: 'Hello!'
    },
    {
        id: 2,
        text: 'How can I help you?'
    }
];
}