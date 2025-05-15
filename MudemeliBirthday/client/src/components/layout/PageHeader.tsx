import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
  color?: "blue" | "red" | "green" | "purple" | "yellow";
};

export default function PageHeader({ 
  title, 
  subtitle, 
  className = "",
  color = "blue" 
}: PageHeaderProps) {
  const colorVariants = {
    blue: "text-[hsl(var(--venda-blue))]",
    red: "text-[hsl(var(--venda-red))]",
    green: "text-[hsl(var(--venda-green))]",
    purple: "text-[hsl(var(--venda-purple))]",
    yellow: "text-[hsl(var(--venda-yellow))]",
  };

  const colorClasses = colorVariants[color];
  
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-playfair font-bold mb-4",
        colorClasses
      )}>
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      <div className="w-24 h-1 bg-[hsl(var(--venda-yellow))] mx-auto mt-4"></div>
    </div>
  );
}
