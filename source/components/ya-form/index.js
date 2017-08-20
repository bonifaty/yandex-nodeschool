import { h, Component } from 'preact';
import fields from './fields';
import './ya-form.styl';
const b = require('b_').with('ya-form');

import TextInput from '../text-input';

class YaForm extends Component {
    constructor () {
        super();
        this.formFields = fields;
        this.serverStatuses = ['progress.json', 'success.json', 'error.json'];
        this.state = {
            formAction: this.serverStatuses[0],
            showValidation: false,
            formIsInProgress: false,
            resultStatus: '',
            resultMessage: ''
        };

        this.formFields.forEach((field) => {
            this.state[field.name] = {
                value: ''
            }
        });

        this.handleInputUpdate = this.handleInputUpdate.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.sendApiRequest = this.sendApiRequest.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);

        // Connect window.MyForm API
        window.MyForm = {
            validate: this.validate.bind(this),
            getData: this.getFormData.bind(this),
            setData: this.setFormData.bind(this),
            submit: this.submitForm
        };
    }

    handleInputUpdate (name, value, isValid) {
        this.setState({
            [name]: {
                value,
                isValid
            }
        });
    }

    getErrorFields () {
        return this.formFields
            .map((field) => field.name)
            .filter((name) => !this.state[name].isValid);
    }

    validate () {
        this.setState({
            showValidation: true,
            resultStatus: '',
            resultMessage: ''
        });

        const invalidFields = this.getErrorFields();
        return {
            isValid: invalidFields.length === 0,
            errorFields: invalidFields
        }
    }

    setFormData (obj) {
        Object.keys(obj).forEach((key) => {
            if (this.formFields.map((field) => field.name).indexOf(key) >= 0) {
                this.setState({
                    [key]: {
                        value: obj[key]
                    }
                }, () => {
                    const event = new Event('input:setvalue');
                    document.querySelector(`input[name='${key}']`).dispatchEvent(event);
                });
            }
        });
    }

    getFormData () {
        return this.formFields
            .map((field) => field.name)
            .reduce((acc, name) => {
                    acc[name] = this.state[name].value;
                    return acc;
                }, {});
    }

    handleApiResponse (response) {
        switch (response.status) {
            case 'success':
                this.setState({
                    resultStatus: 'success',
                    formIsInProgress: false,
                    resultMessage: 'Success'
                });
                break;
            case 'progress':
                this.setState({
                    resultStatus: 'progress',
                    resultMessage: 'Работаем...',
                });
                setTimeout(this.sendApiRequest, response.timeout);
                break;
            case 'error':
                this.setState({
                    resultStatus: 'error',
                    formIsInProgress: false,
                    resultMessage: response.reason
                });
                break;
            default:
                break;
        }
    }

    sendApiRequest () {
        let url = this._form.getAttribute('action');
        const params = this.getFormData();
        const paramKeys = Object.keys(params);

        paramKeys.forEach((key, index) => {
            url += `${index === 0 ? '?' : ''}${key}=${encodeURIComponent(params[key])}${paramKeys.length !== index + 1 ? '&' : ''}`;
        });

        fetch(url)
            .then((resp) => resp.json())
            .then(this.handleApiResponse);
    }

    submitForm (e) {
        e && e.preventDefault();
        const validationResult = this.validate();

        if (validationResult.isValid) {
            this.setState({
                formIsInProgress: true
            });

            this.sendApiRequest();
        }
    }

    render(props, state) {
        return <div className={b()}>
            <div className={b('header')}>
                <div className={b('container')}>
                    <div className={b('header-content')}>
                        <div className={b('label')}>
                            Yandex
                        </div>
                        <div className={b('pics-list')}>
                            <svg viewBox="0 0 100 100" className={b('pic')} fill='#fecd2f'>
                                <polygon points="0,0 100,0 50,100"/>
                            </svg>
                            <svg viewBox="0 0 100 100" className={b('pic')} fill='#fecd2f'>
                                <rect x="0" y="0" width="100" height="100"/>
                            </svg>
                            <svg viewBox="0 0 200 200" className={b('pic')} fill='#fecd2f'>
                                <circle cx="100" cy="100" r="100"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={b('container')}>
                <div className={b('content')}>
                    <h1 className={b('title')}>
                        Школа Node.js
                    </h1>
                    <form ref={(c) => this._form = c} id='myForm' action={state.formAction} noValidate={true} onSubmit={this.submitForm}>
                        {this.formFields.map((field) => {
                            return <div className={b('row')} key={field.name}>
                                <TextInput
                                    showValidation={state.showValidation}
                                    name={field.name}
                                    type={field.type}
                                    value={state[field.name].value}
                                    placeholder={field.placeholder}
                                    pattern={field.pattern}
                                    maxDigitsSum={field.maxDigitsSum}
                                    suggestion={field.suggestion}
                                    disabled={state.formIsInProgress}
                                    onUpdate={this.handleInputUpdate} />
                            </div>;
                        })}

                        <div className={b('actions')}>
                            <button className={b('button')} id='submitButton' disabled={state.formIsInProgress}>Поехали!</button>
                        </div>
                    </form>

                    <div id='resultContainer' className={b('result') + ' ' + state.resultStatus}>{state.resultMessage}</div>
                </div>
            </div>
            <div className={b('footer')}>
                <div className={b('container')}>
                    <div className={b('footer-content')}>
                        {this.serverStatuses.map((status) => {
                            return <label className={b('footer-option')} htmlFor={status} key={status}>
                                <input
                                    id={status}
                                    onChange={(e) =>  {this.setState({formAction: status})}}
                                    checked={this.state.formAction === status}
                                    type='radio'
                                    value={status}/> {status}
                            </label>
                        })}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default YaForm;
