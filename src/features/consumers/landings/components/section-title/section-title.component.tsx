import { FC } from 'react';

interface SectionTitleProps {
  title: string;
  component?: 'h1' | 'h2' | 'h3';
}

export const SectionTitle: FC<SectionTitleProps> = ({ 
  title,
  component: Component = 'h2'
}) => {
  return (
    <div className="relative py-2 md:py-2 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          <Component className="text-4xl md:text-5xl lg:text-6xl font-black text-center whitespace-nowrap">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              {title}
            </span>
          </Component>
          <div className="h-[4px] flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}; 