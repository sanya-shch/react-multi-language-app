import React from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';

import './App.css';

counterpart.registerTranslations('en', {
    title: 'Title',
    paragraphs: {
        p1: 'Paragraph with <b>html</b> inside',
        p2: 'Paragraph with %(link)s'
    },
    link: 'link',
    placeholder: 'input'
});
counterpart.setLocale('en');

const Link = (props) =>
    <Translate
        content={props.content}
        component="a"
        href="//www.npmjs.com/package/react-translate-component"
        target="_blank"
    />;

export default class App extends React.Component {

    render() {

        const link = <Link content="link"/>;

        return (
            <div className="App">

                <Translate content="title" component="h1"/>

                <Translate content="paragraphs.p1" component="p" unsafe={true}/>

                <Translate content="paragraphs.p2" component="p" with={{link}}/>

                <Translate component="input" attributes={{placeholder: 'placeholder'}}/>

            </div>
        );
    }

}
