export default [
    {
        name: 'fio',
        placeholder: 'ФИО',
        pattern: '^[a-zA-Zа-яА-Я]+\\s[a-zA-Zа-яА-Я]+\\s[a-zA-Zа-яА-Я]+$',
        suggestion: 'Формат: Ровно три слова'
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        pattern: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@?(ya\.ru|yandex\.ru|yandex\.ua|yandex\.by|yandex\.kz|yandex\.com)$',
        suggestion: 'Разрешенные домены: ya.ru, yandex.ru, yandex.ua, yandex.by, ,yandex.kz, yandex.com'
    },
    {
        name: 'phone',
        type: 'phone',
        placeholder: 'Телефон',
        pattern: '^(\\+7)(\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2})$',
        maxDigitsSum: '30',
        suggestion: 'Формат: +7(111)123-33-22, сумма цифр не должна превышать 30',
    }
];