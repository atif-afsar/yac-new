const variants = {
  primary:
    "bg-yac-purple hover:bg-yac-purple-light text-yac-white border border-yac-purple/50",
  secondary:
    "bg-transparent hover:bg-yac-surface text-yac-white border border-yac-muted/40",
  accent:
    "bg-yac-gold hover:bg-yac-gold-light text-yac-bg font-semibold border border-yac-gold/50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as: Tag = "button",
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yac-purple focus-visible:ring-offset-2 focus-visible:ring-offset-yac-bg ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
