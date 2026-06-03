'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ImageStack({ images }) {
  const [cards, setCards] = useState(
    images.map((src, index) => ({
      id: index,
      src: src.src,
      position: src.position ?? 'center center',
      zIndex: 50 - index * 10,
    }))
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const minDragDistance = 50;

  const getCardStyles = (index) => ({
    x: index * -12,
    y: index * -8,
    rotate: index === 0 ? 0 : -(2 + index * 3),
    scale: 1,
    transition: { duration: 0.5 },
  });

  const handleDragStart = (_, info) => {
    dragStartPos.current = { x: info.point.x, y: info.point.y };
  };

  const handleDragEnd = (_, info) => {
    const dist = Math.sqrt(
      Math.pow(info.point.x - dragStartPos.current.x, 2) +
      Math.pow(info.point.y - dragStartPos.current.y, 2)
    );
    if (isAnimating || dist < minDragDistance) return;

    setIsAnimating(true);
    setCards(prev => {
      const next = [...prev];
      const moved = next.shift();
      next.push(moved);
      return next.map((card, i) => ({ ...card, zIndex: 50 - i * 10 }));
    });
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {cards.map((card, index) => {
        const isTop = index === 0;
        return (
          <motion.div
            key={card.id}
            className="absolute w-full origin-bottom overflow-hidden rounded-2xl shadow-lg bg-gray-100 cursor-grab active:cursor-grabbing"
            style={{ zIndex: card.zIndex, aspectRatio: '3/4' }}
            animate={getCardStyles(index)}
            drag={isTop && !isAnimating}
            dragElastic={0.2}
            dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
            dragSnapToOrigin={true}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileHover={isTop ? { scale: 1.03, transition: { duration: 0.2 } } : {}}
            whileDrag={{
              scale: 1.08,
              rotate: 0,
              zIndex: 100,
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
              transition: { duration: 0.1 },
            }}
          >
            <img
              src={card.src}
              alt={`Card ${card.id + 1}`}
              draggable={false}
              className="w-full h-full object-cover pointer-events-none"
              style={{ objectPosition: card.position }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
