import type { NicheConfig } from '../types'

export const renovation: NicheConfig = {
  id: 'renovation',
  meta: {
    title: 'ДомМастер — ремонт квартир под ключ',
    description: 'Ремонт квартир под ключ с фиксированной сметой и гарантией 3 года.',
  },
  theme: {
    accent: '#2f9e6e',
    accentHover: '#258459',
    accentContrast: '#ffffff',
    dark: '#15201b',
    darkSoft: '#1e2c25',
  },
  brand: {
    name: 'ДомМастер',
    logoMark: 'ДМ',
  },
  contacts: {
    phone: '+7 (999) 765-43-21',
    address: 'г. Москва, ул. Строителей, 5',
    hours: 'Пн–Сб 9:00–20:00',
  },
  nav: [
    { label: 'Услуги', href: '#services' },
    { label: 'Преимущества', href: '#advantages' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Вопросы', href: '#faq' },
    { label: 'Контакты', href: '#contacts' },
  ],
  hero: {
    eyebrow: 'Ремонт квартир под ключ',
    title: 'Ремонт в срок и по смете, которую мы не меняем',
    subtitle: 'Бесплатный замер и дизайн-проект, поэтапная оплата и гарантия 3 года по договору.',
    cta: 'Вызвать замерщика',
    stats: [
      { value: '9 лет', label: 'опыта' },
      { value: '640+', label: 'квартир' },
      { value: '3 года', label: 'гарантии' },
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=75&auto=format&fit=crop',
      alt: 'Светлая квартира после ремонта',
    },
  },
  services: {
    title: 'Виды ремонта',
    subtitle: 'Цены указаны за квадратный метр пола с учётом работ.',
    items: [
      { icon: '🖌️', title: 'Косметический', description: 'Обои, покраска, напольные покрытия.', price: 'от 4 500 ₽/м²' },
      { icon: '🧱', title: 'Капитальный', description: 'Перепланировка, электрика, сантехника.', price: 'от 9 000 ₽/м²' },
      { icon: '✨', title: 'Дизайнерский', description: 'Реализация проекта с авторским надзором.', price: 'от 14 000 ₽/м²' },
    ],
  },
  advantages: {
    title: 'Почему нам доверяют',
    items: [
      { icon: '📄', title: 'Фиксированная смета', description: 'Цена прописана в договоре и не растёт.' },
      { icon: '📅', title: 'Сроки с неустойкой', description: 'Платим за каждый день просрочки.' },
      { icon: '📹', title: 'Онлайн-контроль', description: 'Фотоотчёты по каждому этапу.' },
    ],
  },
  steps: {
    title: 'Этапы работы',
    items: [
      { title: 'Заявка', description: 'Оставляете контакты — перезваниваем.' },
      { title: 'Замер', description: 'Бесплатный выезд и консультация.' },
      { title: 'Договор', description: 'Смета, сроки и гарантия на бумаге.' },
      { title: 'Ремонт', description: 'Поэтапная сдача и оплата.' },
    ],
  },
  reviews: {
    title: 'Отзывы',
    items: [
      { author: 'Ольга', meta: 'двушка, 54 м²', rating: 5, text: 'Уложились в срок и в смету. Бригада аккуратная.' },
      { author: 'Игорь', meta: 'студия, 28 м²', rating: 5, text: 'Понравились фотоотчёты — был в курсе, не приезжая.' },
    ],
  },
  faq: {
    title: 'Частые вопросы',
    items: [
      { question: 'Кто закупает материалы?', answer: 'Можем мы со скидкой поставщика или вы сами — на выбор.' },
      { question: 'Нужно ли согласовывать перепланировку?', answer: 'Поможем подготовить документы и согласовать.' },
    ],
  },
  form: {
    title: 'Вызвать замерщика',
    subtitle: 'Замер и консультация бесплатно.',
    submitLabel: 'Отправить заявку',
    successTitle: 'Спасибо!',
    successText: 'Перезвоним, чтобы согласовать время замера.',
    consent: 'Нажимая кнопку, вы соглашаетесь на обработку персональных данных.',
    fields: [
      { name: 'name', label: 'Имя', type: 'text', placeholder: 'Как к вам обращаться', required: true },
      { name: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (___) ___-__-__', required: true },
      { name: 'area', label: 'Площадь, м²', type: 'text', placeholder: 'Например, 45' },
      { name: 'repairType', label: 'Тип ремонта', type: 'select', options: ['Косметический', 'Капитальный', 'Дизайнерский', 'Пока не знаю'] },
      { name: 'date', label: 'Удобная дата замера', type: 'date' },
    ],
  },
}
