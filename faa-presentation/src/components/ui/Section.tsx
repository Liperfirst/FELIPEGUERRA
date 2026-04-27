import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen w-full flex flex-col justify-center px-6 md:px-12 py-24 ${className}`}
    >
      <div className="w-full max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
}
