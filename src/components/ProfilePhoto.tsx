/**
 * Profile photo for Home and About pages.
 */
const hasPhoto = true;

export function ProfilePhoto({
  size = "md",
  rounded = "full",
  width,
  height,
  focalPointHigher,
  zoom = 1,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "full" | "xl";
  /** Exact width in px (e.g. 442). When set with height, overrides size. */
  width?: number;
  /** Exact height in px (e.g. 263.5). When set with width, overrides size. */
  height?: number;
  /** Focal point offset in px: positive = lower, negative = higher (e.g. -30 = 30px higher). */
  focalPointHigher?: number;
  /** Zoom: < 1 zooms out (shows more of image), 1 = fill frame. */
  zoom?: number;
}) {
  const sizeClasses = {
    sm: "h-24 w-24 sm:h-28 sm:w-28",
    md: "h-32 w-32 sm:h-40 sm:w-40",
    lg: "h-48 w-48 sm:h-56 sm:w-56",
    xl: "h-56 w-56 sm:h-72 sm:w-72",
  };
  const roundedClasses = {
    full: "rounded-full",
    xl: "rounded-2xl",
  };

  const useExactSize = width != null && height != null;
  const objectPosition =
    focalPointHigher != null
      ? `50% calc(50% ${focalPointHigher >= 0 ? "+" : ""}${focalPointHigher}px)`
      : "50% calc(50% + 100px)";

  if (hasPhoto) {
    const zoomOut = useExactSize && zoom < 1;
    return (
      <span
        className={`inline-block overflow-hidden bg-zinc-100 dark:bg-zinc-800 ${useExactSize ? "" : sizeClasses[size]} ${roundedClasses[rounded]}`}
        style={{
          ...(useExactSize && {
            width: `${width}px`,
            height: `${height}px`,
            display: "block",
          }),
        }}
      >
        <img
          src="/GimageExport.png"
          alt="Grant Leslie"
          className={`${!useExactSize ? sizeClasses[size] : "h-full w-full"} ${roundedClasses[rounded]}`}
          style={{
            ...(useExactSize && {
              width: "100%",
              height: "100%",
              objectFit: zoomOut ? "contain" : "cover",
              objectPosition,
            }),
            ...(!useExactSize && { objectFit: "cover", objectPosition }),
          }}
        />
      </span>
    );
  }

  return (
    <div
      className={`bg-zinc-200 dark:bg-zinc-800 ${useExactSize ? "" : sizeClasses[size]} ${roundedClasses[rounded]}`}
      style={useExactSize ? { width: `${width}px`, height: `${height}px` } : undefined}
      aria-hidden
    />
  );
}
