import { cn } from "@/lib/utils";
import {
    BarChart3,
    Receipt,
    PieChart,
    CreditCard,
    Globe,
    Zap,
  } from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Advanced Analytics",
      description:
        "Get detailed insights into your spending patterns with AI-powered analytics",
      icon: <BarChart3 />,
    },
    {
      title: "Smart Receipt Scanner",
      description:
        "Extract data automatically from receipts using advanced AI technology",
      icon: <Receipt />,
    },
    {
      title: "Budget Planning",
      description:
        "Create and manage budgets with intelligent recommendations",
      icon: <PieChart />,
    },
    {
      title: "Multi-Account Support",
      description: "Manage multiple accounts and credit cards in one place",
      icon: <CreditCard />,
    },
    {
      title: "Multi-Currency",
      description: "Support for multiple currencies with real-time conversion",
      icon: <Globe />,
    },
    {
      title: "Automated Insights",
      description:
        "Get automated financial insights and recommendations",
      icon: <Zap />,
    },
  ];

  return (
    <div className="relative z-10 py-10 max-w-6xl mx-auto">

      {/* Exactly 3 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}


const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
