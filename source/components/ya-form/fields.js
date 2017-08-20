export default [
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
];