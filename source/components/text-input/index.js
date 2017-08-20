import './text-input.styl';
import { h, Component } from 'preact';
const b = require('b_').with('text-input');

class TextInput extends Component {
    constructor () {
        super();
        this.state = {
            value: '',
            isValid: true
        };

        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount () {
        this.handleInput();
    }

    handleInput () {
        let isValid;
        const { name, value, validity } = this._input;
        const { maxDigitsSum, onUpdate } = this.props;

        isValid = validity.valid;

        if (maxDigitsSum && value.length > 0) {
            const filteredValue = value.replace( /[^\d]*/g, '');
            const sum = Array.from(filteredValue).reduce((a, b) => parseInt(a) + parseInt(b), 0);

            if (sum > maxDigitsSum) {
                isValid = false;
            }
        }

        this.setState({
            value: value,
            isValid: isValid
        });

        onUpdate(name, value, isValid);
    }

    render(props, state) {
        return <div className={b({
                    'error': !state.isValid && props.showValidation,
                    'correct': state.isValid
                })}>
            <input
                ref={(c) => this._input = c}
                className={b('control')}
                name={props.name}
                value={state.value}
                onInput={this.handleInput}
                required={true}
                type={props.type ? props.type : 'text'}
                placeholder={props.placeholder}
                pattern={props.pattern} />
            <div className={b('suggestion')}>{props.suggestion}</div>
        </div>
    }
}

export default TextInput;
