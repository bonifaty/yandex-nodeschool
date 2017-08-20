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
        let isValid;
        const { value, validity } = event.target;
        const { maxDigitsSum } = this.props;

        if (validity.valid) {
            isValid = true;
        }

        if (maxDigitsSum && value.length > 0) {
            const filteredValue = value.replace( /[^\d]*/g, '');
            const sum = Array.from(filteredValue).reduce((a, b) => parseInt(a) + parseInt(b), 0);

            if (sum > maxDigitsSum) {
                isValid = false;
            }
        }

        this.setState({
            value: value,
            showError: !isValid
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
