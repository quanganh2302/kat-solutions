"use client";

import { useState, type CSSProperties } from "react";
import type { SolutionCard } from "@/content/site";

const SolutionCarousel = ({ cards, locale = "vi" }: { cards: SolutionCard[]; locale?: "vi" | "en" }) => {
  const slideCards = [...cards, ...cards, ...cards];
  const initialIndex = cards.length;
  const [index, setIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(true);

  const move = (direction: 1 | -1) => {
    setIsAnimating(true);
    setIndex((current) => current + direction);
  };

  const resetLoop = () => {
    if (index < cards.length) {
      setIsAnimating(false);
      setIndex(index + cards.length);
    }

    if (index >= cards.length * 2) {
      setIsAnimating(false);
      setIndex(index - cards.length);
    }
  };

  const progress = ((index % cards.length) + cards.length) % cards.length;

  return (
    <section className="solution-carousel" aria-roledescription="carousel" aria-label={locale === "vi" ? "Giải pháp KAT Solutions" : "KAT Solutions"}>
      <button type="button" className="focus-ring solution-carousel-side solution-carousel-side-left" onClick={() => move(-1)} aria-label={locale === "vi" ? "Giải pháp trước" : "Previous solution"}>
        <span aria-hidden>‹</span>
      </button>

      <div className="solution-carousel-viewport">
        <div
          className={`solution-carousel-track ${isAnimating ? "solution-carousel-track-animated" : ""}`}
          style={{ "--carousel-index": index } as CSSProperties}
          onTransitionEnd={resetLoop}
        >
          {slideCards.map((card, cardIndex) => (
            <article className="solution-carousel-card" key={`${card.tag}-${cardIndex}`} aria-hidden={cardIndex < cards.length || cardIndex >= cards.length * 2}>
              <div className="solution-carousel-copy">
                <p className="text-[13px] font-medium leading-[18px] text-[#c69f00]">{card.tag}</p>
                <h3 className="display mt-[10px] text-xl font-semibold leading-7 text-[#1a212d]">{card.title}</h3>
                <p className="mt-[14px] text-[15px] leading-[23px] text-[#616977]">{card.description}</p>
              </div>
              <img src={card.image} alt="" className="absolute inset-x-0 bottom-0 h-[250px] w-full object-cover" />
            </article>
          ))}
        </div>
      </div>

      <button type="button" className="focus-ring solution-carousel-side solution-carousel-side-right" onClick={() => move(1)} aria-label={locale === "vi" ? "Giải pháp tiếp theo" : "Next solution"}>
        <span aria-hidden>›</span>
      </button>

      <div className="solution-carousel-progress" aria-label={`${locale === "vi" ? "Slide" : "Slide"} ${progress + 1} ${locale === "vi" ? "trên" : "of"} ${cards.length}`}>
        <button type="button" className="focus-ring" onClick={() => move(-1)} aria-label={locale === "vi" ? "Giải pháp trước" : "Previous solution"}><span aria-hidden>‹</span></button>
        <div className="solution-carousel-progress-track"><span style={{ transform: `scaleX(${(progress + 1) / cards.length})` }} /></div>
        <button type="button" className="focus-ring" onClick={() => move(1)} aria-label={locale === "vi" ? "Giải pháp tiếp theo" : "Next solution"}><span aria-hidden>›</span></button>
      </div>
    </section>
  );
};

export default SolutionCarousel;
