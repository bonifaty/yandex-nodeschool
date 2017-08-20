import { h, Component } from 'preact';
import fields from './fields';
import './ya-form.styl';
const b = require('b_').with('ya-form');

import TextInput from '../text-input';

class YaForm extends Component {
    constructor () {
        super();
        this.formFields = fields;
        this.state = {
            formTriedSubmit: false,
            formIsInProgress: false,
            testError: false,
            fetchCounter: 0,
            resultMessage: ''
        };

        this.handleInputUpdate = this.handleInputUpdate.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendApiRequest = this.sendApiRequest.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);

        this.formFields
            .forEach((field) => {
                this.state[field.name] = {
                    value: '',
                    isValid: false
                }
            });

        window.MyForm = {
            validate: () => {
                return {
                    isValid: this.isFormValid(),
                }
            },
            getData: this.getFormData.bind(this),
            setData: (obj) => {
                Object.keys(obj).forEach((key) => {
                    if (this.formFields.map((field) => field.name).indexOf(key) >= 0) {
                        this.setState({
                            [key]: {
                                value: obj[key]
                            }
                        });
                        /*const event = new Event('input', { bubbles: true });
                        document.querySelector(`input[name='${key}']`).dispatchEvent(event);*/
                    }
                });
            },
            submit: this.submitForm.bind(this)
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

    isFormValid () {
        const invalidFields = this.formFields
            .map((field) => field.name)
            .filter((name) => !this.state[name].isValid);

        return invalidFields.length === 0;
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
                    fetchCounter: 0,
                    formIsInProgress: false,
                    resultMessage: 'Success'
                });
                break;
            case 'progress':
                this.setState({
                    fetchCounter: this.state.fetchCounter + 1
                });
                setTimeout(this.sendApiRequest, response.timeout);
                break;
            case 'error':
                this.setState({
                    fetchCounter: 0,
                    formIsInProgress: false,
                    resultMessage: response.reason
                });
                break;
            default:
                break;
        }
    }

    sendApiRequest () {
        const params = this.getFormData();
        let url = `/api/${this.state.fetchCounter > 2 ? (this.state.testError ? 'error' : 'success') : 'progress'}.json`;
        const paramKeys = Object.keys(params);

        paramKeys.forEach((key, index) => {
            url += `${index === 0 ? '?' : ''}${key}=${encodeURIComponent(params[key])}${paramKeys.length !== index + 1 ? '&' : ''}`;
        });

        fetch(url)
            .then((resp) => resp.json())
            .then(this.handleApiResponse);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.submitForm();
    }

    submitForm () {
        this.setState({
            formTriedSubmit: true
        });

        if (this.isFormValid()) {
            this.setState({
                formIsInProgress: true
            });

            this.sendApiRequest();
        }
    }

    handleCheckboxChange (event) {
        this.setState({
            testError: event.target.checked
        })
    }

    render(props, state) {
        return <div className={b()}>
            <div className={b('label')}>
                <div className={b('container')}>Yandex</div>
            </div>
            <div className={b('container')}>
                <div className={b('content')}>
                    <h1 className={b('title')}>
                        Школа Node.js
                    </h1>
                    <div className={b('header')}>
                        <svg viewBox="0 0 200 200" className={b('header-circle')} fill='#fecd2f'>
                            <circle cx="100" cy="100" r="100"/>
                        </svg>
                    </div>
                    <form id='myForm' noValidate={true} onSubmit={this.handleSubmit}>
                        {this.formFields.map((field) => {
                            return <div className={b('row')} key={field.name}>
                                <TextInput
                                    showValidation={state.formTriedSubmit}
                                    name={field.name}
                                    type={field.type}
                                    value={state[field.name].value}
                                    placeholder={field.placeholder}
                                    pattern={field.pattern}
                                    maxDigitsSum={field.maxDigitsSum}
                                    suggestion={field.suggestion}
                                    onUpdate={this.handleInputUpdate} />
                            </div>;
                        })}

                        <div className={b('actions')}>
                            <button className={b('button')} id='submitButton' disabled={state.formIsInProgress}>Поехали!</button>
                        </div>
                    </form>

                    <div id='resultContainer' className={b('result')}>{state.resultMessage}</div>
                </div>
            </div>
            <div className={b('footer')}>
                <div className={b('container')}>
                    <label htmlFor='testError'>
                        <input
                            id='testError'
                            onChange={this.handleCheckboxChange}
                            checked={state.testError}
                            type="checkbox"/> Тестировать Error ответ
                    </label>
                </div>
            </div>
        </div>
    }
}

export default YaForm;
