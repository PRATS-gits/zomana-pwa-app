
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  animationDelay?: number;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  alignment = 'left',
  className,
  animationDelay = 0
}: SectionHeadingProps) {
  const delayStyle = {
    animationDelay: `${animationDelay}ms`
  };

  return (
    <div className={cn(
      "mb-8",
      {
        "text-left": alignment === 'left',
        "text-center": alignment === 'center',
        "text-right": alignment === 'right',
      },
      className
    )}>
      <h2 
        className="text-2xl font-bold tracking-tight md:text-3xl animate-slide-in-bottom"
        style={delayStyle}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className="mt-2 text-muted-foreground animate-slide-in-bottom"
          style={{ animationDelay: `${animationDelay + 100}ms` }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
