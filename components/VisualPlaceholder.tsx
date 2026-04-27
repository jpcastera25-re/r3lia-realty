import Image from "next/image";

type VisualPlaceholderProps = {
  className?: string;
  variant?: "hero" | "editorial" | "cinematic" | "detail";
  accentLabel?: string;
  src?: string;
  alt?: string;
  objectPosition?: string;
  sizes?: string;
};

const variantStyles: Record<NonNullable<VisualPlaceholderProps["variant"]>, string> = {
  hero: "from-[#d8cec0] via-[#c6b9a8] to-[#a69784]",
  editorial: "from-[#e2d8ca] via-[#d2c3b0] to-[#baab95]",
  cinematic: "from-[#c3b29d] via-[#a99782] to-[#8f7d69]",
  detail: "from-[#e8dfd3] via-[#dbcfbf] to-[#c5b7a3]"
};

export function VisualPlaceholder({
  className = "",
  variant = "editorial",
  accentLabel,
  src,
  alt = "",
  objectPosition = "center",
  sizes = "(max-width: 768px) 100vw, 50vw"
}: VisualPlaceholderProps) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-[1.25rem] border border-charcoal/15 ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition }}
          sizes={sizes}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden rounded-[1.25rem] border border-charcoal/15 bg-gradient-to-br ${variantStyles[variant]} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(247,243,236,0.45),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(50,42,37,0.12),transparent_50%)]" />
      <div className="absolute inset-5 rounded-2xl border border-ivory/45" />
      <div className="absolute left-5 right-5 top-5 h-px bg-ivory/40" />
      <div className="absolute bottom-5 left-5 h-px w-20 bg-charcoal/30" />
      {accentLabel ? (
        <span className="absolute bottom-5 right-5 rounded-full border border-charcoal/20 bg-ivory/35 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-charcoal/65">
          {accentLabel}
        </span>
      ) : null}
    </div>
  );
}
