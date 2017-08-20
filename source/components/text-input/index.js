import './text-input.styl';
import { h, Component } from 'preact';
const b = require('b_').with('text-input');

class TextInput extends Component {
    constructor () {
        super();
        this.state = {
            value: '',
            showError: false
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput (event) {
        const { valid } = event.target.validity;
        this.setState({
            value: event.target.value,
            showError: !valid
        });
    }

    render(props, state) {
        return <div className={b({'error': state.showError})}>
            <input
                className={b('control')}
                value={state.value}
                onInput={this.handleInput}
                required={true}
                type={props.type ? props.type : 'text'}
                placeholder={props.placeholder}
                pattern={props.pattern} />
        </div>
    }
}

export default TextInput;
