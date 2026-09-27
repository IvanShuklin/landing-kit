# Landing Kit

Шаблон лендинга с формой заявки. Весь контент ниши (тексты, услуги, цвета, поля формы) лежит в одном конфиге — компоненты от ниши не зависят.

## Запуск

```bash
npm install
npm run dev
```

## Структура

```
src/
  config/
    types.ts            тип NicheConfig — контракт для любой ниши
    niches/
      autoservice.ts    DrivePro (автосервис)
      renovation.ts     ДомМастер (ремонт квартир) — пример второй ниши
    index.ts            реестр ниш, выбор через VITE_NICHE
  sections/             блоки страницы (Header, Hero, Services, …)
  components/           LeadForm, FormFieldInput, Section
  hooks/useLeadForm.ts  состояние, валидация, отправка формы
  lib/leads.ts          формирование и отправка заявки (+ UTM)
  lib/phone.ts          маска телефона
  lib/theme.ts          CSS-переменные и мета-теги из конфига
```

## Новая ниша

1. Скопировать `src/config/niches/autoservice.ts` → `dentistry.ts`, поменять тексты, цвета и поля формы.
2. Добавить её в реестр `src/config/index.ts`.
3. В `.env` указать `VITE_NICHE=dentistry`.

Поля формы описываются массивом `form.fields` (`text`, `tel`, `select`, `date`, `textarea`). Поля с `name: 'name'` и `name: 'phone'` попадают в `contact`, остальные — в `fields`.

## Подключение amoCRM

Форма отправляет `POST` JSON на `VITE_LEAD_ENDPOINT`. Если переменная пустая — заявка выводится в консоль (демо-режим).

Ходить в API amoCRM напрямую из браузера нельзя: токен окажется в открытом коде. Нужен посредник:

- свой серверless-обработчик (Vercel/Netlify/Яндекс Cloud Functions), который создаёт сделку через `POST /api/v4/leads/complex`;
- или интеграторы вроде Albato / Make / ApiX-Drive с входящим вебхуком.

Пример тела запроса:

```json
{
  "niche": "autoservice",
  "contact": { "name": "Иван", "phone": "+7 (999) 123-45-67" },
  "fields": { "carBrand": "Kia Rio", "service": "Диагностика", "date": "2026-10-01" },
  "utm": { "utm_source": "yandex", "utm_campaign": "autumn" },
  "page": "https://drivepro.ru/?utm_source=yandex",
  "referrer": "",
  "createdAt": "2026-09-27T10:00:00.000Z"
}
```
