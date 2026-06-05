export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = "center",
  variant = "dark",
  className = "",
}) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "left"
        ? "text-left"
        : "text-right ml-auto";

  const isLight = variant === "light";

  const renderTitle = () => {
    if (!title) return null;

    if (highlight && title.includes(highlight)) {
      const [before, after] = title.split(highlight);
      return (
        <h2
          className={`text-2xl font-bold sm:text-3xl lg:text-4xl ${
            isLight ? "text-neutral-900" : "text-yac-white"
          }`}
        >
          {before}
          <span className="text-yac-red">{highlight}</span>
          {after}
        </h2>
      );
    }

    return (
      <h2
        className={`text-2xl font-bold sm:text-3xl lg:text-4xl ${
          isLight ? "text-neutral-900" : "text-yac-white"
        }`}
      >
        {title}
      </h2>
    );
  };

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {label && (
        <span
          className={`mb-2 inline-block text-sm font-semibold uppercase tracking-wider ${
            isLight ? "text-yac-red" : "text-yac-gold"
          }`}
        >
          {label}
        </span>
      )}
      {renderTitle()}
      {description && (
        <p
          className={`mt-3 sm:text-lg ${
            isLight ? "text-neutral-600" : "text-yac-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
