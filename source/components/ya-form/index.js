import { h, Component } from 'preact';
const b = require('b_').with('text-input');

import TextInput from '../text-input';

class YaForm extends Component {
    handleSubmit (e) {
        e.preventDefault();
        console.log('Here we go!');
    }

    render(props, state) {
        return <div className={b()}>
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
