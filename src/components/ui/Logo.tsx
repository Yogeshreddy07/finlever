import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  imageClassName?: string;
};

export function Logo({ className, imageClassName }: LogoProps) {
  return (
    <Link
      href="/#top"
      aria-label="FinLever home"
      className={cn(
        "inline-flex shrink-0 items-center rounded-lg p-1 transition duration-200 hover:opacity-95",
        className,
      )}
    >
      <span className="inline-flex items-center rounded px-4 py-3 bg-[hsl(222_47%_10%)] dark:bg-transparent dark:px-0 dark:py-0">
        <Image
          src="/image/Finlever-Trans.png"
          alt="FinLever Consulting"
          width={320}
          height={88}
          className={cn("h-12 w-auto sm:h-14", imageClassName)}
          priority
        />
      </span>
    </Link>
  );
}
