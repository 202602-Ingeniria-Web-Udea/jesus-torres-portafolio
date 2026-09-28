import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size: number;
  square?: boolean;
};

const Avatar = ({ src, alt, size, square }: Props) => {
  return (
    <div
      className={`${square ? "rounded-3xl" : "rounded-full"} aspect-square max-w-full overflow-hidden bg-blanco border border-zinc-200 dark:border-zinc-700 shadow-sm`}
      style={{ width: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
};

export default Avatar;
