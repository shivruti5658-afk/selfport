import React from 'react';

interface SectionHeaderProps {
  title: string;
  sectionNumber: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, sectionNumber }) => {
  return (
    <div className="relative py-8 mb-12 animate-reveal">
      <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-off-white relative z-10">
        {title}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary-yellow"></span>
      </h2>
      <span className="absolute -top-4 -left-4 text-7xl md:text-8xl font-bold text-graphite-grey/50 opacity-20 z-0">
        {sectionNumber}
      </span>
    </div>
  );
};

export default SectionHeader;
