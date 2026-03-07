/**
 * Profile photo for Home and About pages.
 */
const hasPhoto = true;

export function ProfilePhoto({
  size = "md",
  rounded = "full",
}: {
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "xl";
}) {
  const sizeClasses = {
    sm: "h-24 w-24 sm:h-28 sm:w-28",
    md: "h-32 w-32 sm:h-40 sm:w-40",
    lg: "h-48 w-48 sm:h-64 sm:w-64",
  };
  const roundedClasses = {
    full: "rounded-full",
    xl: "rounded-2xl",
  };

  if (hasPhoto) {
    return (
      <img
        src="/photo.png"
        alt="Grant Leslie"
        className={`object-cover ${sizeClasses[size]} ${roundedClasses[rounded]}`}
      />
    );
  }

  return (
    <div
      className={`bg-zinc-200 dark:bg-zinc-800 ${sizeClasses[size]} ${roundedClasses[rounded]}`}
      aria-hidden
    />
  );
}
