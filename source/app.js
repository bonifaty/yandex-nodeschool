import { h, render } from 'preact';
import './app.styl';
const b = require('b_').with('app');

import YaForm from './components/ya-form';

render((
    <div className={b()}>
        <div className={b('form')}>
            <YaForm />
        </div>
    </div>
), document.body);