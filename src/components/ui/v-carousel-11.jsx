import useEmblaCarousel from 'embla-carousel-react'
import QuoteIcon from 'lucide-react/dist/esm/icons/quote.mjs'
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left.mjs'
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right.mjs'
import { useCallback, useEffect, useState } from 'react'
import './v-carousel-11.css'

export default function TestimonialCarousel({ testimonials, interval = 5000 }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [current, setCurrent] = useState(0)

  const previous = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => emblaApi.scrollNext(), interval)
    return () => window.clearInterval(timer)
  }, [emblaApi, interval])

  return <div className="testimonial-carousel">
    <div className="testimonial-viewport" ref={emblaRef}>
      <div className="testimonial-track">
        {testimonials.map(testimonial => <div className="testimonial-slide" key={testimonial.name}>
          <article className="testimonial-card">
            <QuoteIcon className="testimonial-quote" aria-hidden="true" />
            <blockquote>“{testimonial.quote}”</blockquote>
            <div className="testimonial-person">
              <span className="testimonial-avatar" aria-hidden="true">{testimonial.avatar}</span>
              <div><strong>{testimonial.name}</strong><small>{testimonial.role}</small></div>
            </div>
          </article>
        </div>)}
      </div>
    </div>

    <button className="testimonial-arrow testimonial-previous" type="button" onClick={previous} aria-label="Previous student review"><ChevronLeft aria-hidden="true" /></button>
    <button className="testimonial-arrow testimonial-next" type="button" onClick={next} aria-label="Next student review"><ChevronRight aria-hidden="true" /></button>

    <div className="testimonial-dots" aria-label="Choose a student review">
      {testimonials.map((testimonial, index) => <button
        aria-label={`Go to review ${index + 1}`}
        aria-current={index === current ? 'true' : undefined}
        className={index === current ? 'active' : ''}
        key={testimonial.name}
        onClick={() => emblaApi?.scrollTo(index)}
        type="button"
      />)}
    </div>
  </div>
}
