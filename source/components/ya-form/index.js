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
            <div className={b('header')}>
                <svg viewBox="0 0 200 200" className={b('header-circle')} fill='#fecd2f'>
                    <circle cx="100" cy="100" r="100"/>
                </svg>
            </div>
            <form onSubmit={this.handleSubmit}>
                <TextInput
                    name='fio'
                    type='text'
                    placeholder='ФИО' />
                <TextInput
                    name='email'
                    type='email'
                    placeholder='Email' />
                <TextInput
                    name='phone'
                    type='phone'
                    placeholder='Телефон'/>

                <button>Поехали!</button>
            </form>
        </div>
    }
}

export default YaForm;
