import './text-input.styl';
import { h, Component } from 'preact';
const b = require('b_').with('text-input');

class TextInput extends Component {
    constructor () {
        super();
        this.state = {
            isValid: undefined
        };

        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount () {
        this.handleInput();
        this._input.addEventListener('input:setvalue', this.handleInput)
    }

    handleInput () {
        let isValid;
        const { name, value, checkValidity } = this._input;
        const { maxDigitsSum, onUpdate } = this.props;

        isValid = checkValidity();

        if (maxDigitsSum && value.length > 0) {
            const filteredValue = value.replace( /[^\d]*/g, '');
            const sum = Array.from(filteredValue).reduce((a, b) => parseInt(a) + parseInt(b), 0);

            if (sum > maxDigitsSum) {
                isValid = false;
            }
        }

        this.setState({
            isValid: isValid
        });

        onUpdate(name, value, isValid);
    }

    render(props, state) {
        return <div className={b({
                    'correct': state.isValid
                })}>
            <input
                ref={(c) => this._input = c}
                className={b('control') + (!state.isValid && props.showValidation ? ' error' : '')}
                name={props.name}
                value={props.value}
                disabled={props.disabled}
                onInput={this.handleInput}
                required={true}
                type={props.type ? props.type : 'text'}
                placeholder={props.placeholder}
                pattern={props.pattern} />
            <p className={b('suggestion')}>{props.suggestion}</p>
        </div>
    }
}

export default TextInput;
