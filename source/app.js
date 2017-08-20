import { h, render } from 'preact';

require('file-loader?name=[name].[ext]!./index.html');
require('reset-css/reset.css');

import YaForm from './components/ya-form';

render((
    <div>
        <YaForm />
    </div>
), document.body);