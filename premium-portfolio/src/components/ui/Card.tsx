import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  onClick,
  onMouseEnter,
  onMouseLeave,
  style,
}) => {
  const interactiveClasses = onClick
    ? "cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-yellow/20"
    : "";

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      className={`bg-charcoal-grey border border-charcoal-grey/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm ${interactiveClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
