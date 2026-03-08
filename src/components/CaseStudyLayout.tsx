import { ReactNode } from "react";

/**
 * Single-column case study layout to match grantleslie.com (Framer):
 * - Narrow content width (720px) so text and images align
 * - Consistent vertical spacing between sections
 */
export function CaseStudyLayout({ children }: { children: ReactNode }) {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-[720px] px-6">
        {children}
      </div>
    </main>
  );
}

/** Spacing between case study sections to match Framer rhythm */
export const sectionSpacing = "mb-14";
