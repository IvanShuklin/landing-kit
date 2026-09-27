import type { NicheConfig } from '../config'
import { Section } from '../components/Section'

interface Props {
  reviews: NicheConfig['reviews']
}

export function Reviews({ reviews }: Props) {
  return (
    <Section id="reviews" title={reviews.title}>
      <div className="grid grid--3">
        {reviews.items.map((item) => (
          <figure key={item.author + item.text} className="card review">
            <div className="review__rating" aria-label={`Оценка ${item.rating} из 5`}>
              {'★'.repeat(item.rating)}
              <span className="review__rating-empty">{'★'.repeat(5 - item.rating)}</span>
            </div>
            <blockquote className="review__text">{item.text}</blockquote>
            <figcaption className="review__author">
              <strong>{item.author}</strong>
              {item.meta && <span>{item.meta}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
