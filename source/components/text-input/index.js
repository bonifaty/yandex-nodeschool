import './text-input.styl';
import { h, Component } from 'preact';
const b = require('b_').with('text-input');

class TextInput extends Component {
    render(props, state) {
        return <div className={b()}>
            <input
                type={props.type ? props.type : 'text'}
                placeholder={props.placeholder} />
        </div>
    }
}

export default TextInput;
