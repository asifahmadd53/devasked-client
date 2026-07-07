import { cn } from "@/lib/utils";
import { DasboardNavbar } from "./DashboardNavbar";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentLayout({ title, children,className }: ContentLayoutProps) {
  return (
    <div>
      <DasboardNavbar title={title} />
      <div className={cn('container pt-8 pb-8 px-4 sm:px-8', className)}>
        {children}
      </div>
    </div>
  );
}
