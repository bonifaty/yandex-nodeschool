import { h, Component } from 'preact';
import './ya-form.styl';
const b = require('b_').with('ya-form');

import TextInput from '../text-input';

class YaForm extends Component {
    handleSubmit (e) {
        e.preventDefault();
        console.log('Here we go!');
    }

    render(props, state) {
        return <div className={b()}>
            <div className={b('label')}>
                <div className={b('container')}>Yandex</div>
            </div>
            <div className={b('container')}>
                <div className={b('content')}>
                    <h1 className={b('title')}>
                        Школа Node.js
                    </h1>
                    <div className={b('header')}>
                        <svg viewBox="0 0 200 200" className={b('header-circle')} fill='#fecd2f'>
                            <circle cx="100" cy="100" r="100"/>
                        </svg>
                    </div>
                    <form id='myForm' noValidate={true} onSubmit={this.handleSubmit}>
                        <div className={b('row')}>
                            <TextInput
                                name='fio'
                                placeholder='ФИО'
                                pattern='^[a-zA-Zа-яА-Я]+\s[a-zA-Zа-яА-Я]+$'/>
                        </div>
                        <div className={b('row')}>
                            <TextInput
                                name='email'
                                type='email'
                                placeholder='Email'
                                pattern='^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@?(ya\.ru|yandex\.ru|yandex\.ua|yandex\.by|yandex\.kz|yandex\.com)$'/>
                        </div>
                        <div className={b('row')}>
                            <TextInput
                                name='phone'
                                type='phone'
                                placeholder='Телефон'
                                pattern='^(\+7)(\(\d{3}\)\d{3}-\d{2}-\d{2})$'
                                maxDigitsSum='30' />
                        </div>

                        <div className={b('actions')}>
                            <button id='submitButton'>Поехали!</button>
                        </div>
                    </form>

                    <div id='resultContainer' className={b('result')}></div>
                </div>
            </div>
        </div>
    }
}

export default YaForm;
