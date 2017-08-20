import { h, Component } from 'preact';
import './ya-form.styl';
const b = require('b_').with('ya-form');

import TextInput from '../text-input';

class YaForm extends Component {
    constructor () {
        super();
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

        this.formFields = [
            {
                name: 'fio',
                placeholder: 'ФИО',
                pattern: '^[a-zA-Zа-яА-Я]+\\s[a-zA-Zа-яА-Я]+\\s[a-zA-Zа-яА-Я]+$',
                suggestion: 'Ровно три слова'
            },
            {
                name: 'email',
                type: 'email',
                placeholder: 'Email',
                pattern: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@?(ya\.ru|yandex\.ru|yandex\.ua|yandex\.by|yandex\.kz|yandex\.com)$',
                suggestion: 'Tолько в доменах ya.ru, yandex.ru, yandex.ua, yandex.by, ,yandex.kz, yandex.com'
            },
            {
                name: 'phone',
                type: 'phone',
                placeholder: 'Телефон',
                pattern: '^(\\+7)(\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2})$',
                maxDigitsSum: '30',
                suggestion: 'Формат: +7(999)999-99-99, сумма цифр не должна превышать 30',
            }
        ]
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
                                    placeholder={field.placeholder}
                                    pattern={field.pattern}
                                    maxDigitsSum={field.maxDigitsSum}
                                    suggestion={field.suggestion}
                                    onUpdate={this.handleInputUpdate} />
                            </div>;
                        })}

                        <div className={b('actions')}>
                            <button className={b('button')} id='submitButton' disabled={state.formIsInProgress}>Поехали!</button>
                            <input
                                onChange={this.handleCheckboxChange}
                                checked={state.testError}
                                type="checkbox"/>
                        </div>
                    </form>

                    <div id='resultContainer' className={b('result')}>{state.resultMessage}</div>
                </div>
            </div>
        </div>
    }
}

export default YaForm;
