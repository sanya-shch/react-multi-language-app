import React from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';

import './App.css';
import en from './language/en';
import de from './language/de';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('de', de);
counterpart.setLocale('en');

const Link = (props) =>
    <Translate
        content={props.content}
        component="a"
        href="//www.npmjs.com/package/react-translate-component"
        target="_blank"
    />;

export default class App extends React.Component {

    state = {
        lang: 'en'
    };

    onLangChange = (e) => {
        this.setState({lang: e.target.value});
        counterpart.setLocale(e.target.value);
    };

    render() {

        const link = <Link content="link"/>;

        return (
            <div className="App">

                <select value={this.state.lang} onChange={this.onLangChange}>
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                </select>

                <Translate content="title" component="h1"/>

                <Translate content="paragraphs.p1" component="p" unsafe={true}/>

                <Translate content="paragraphs.p2" component="p" with={{link}}/>

                <Translate component="input" attributes={{placeholder: 'placeholder'}}/>

            </div>
        );
    }

}
