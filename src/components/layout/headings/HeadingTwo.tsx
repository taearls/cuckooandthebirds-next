import { TextAlignment } from "@/types/layout";
import {
  getTextAlignmentClass,
  mergeClasses,
} from "@/util/styling/styling.utils";

import { HeadingProps } from "./types";

export default function HeadingTwo({
  children,
  align = TextAlignment.CENTER,
  accent = true,
}: HeadingProps) {
  const alignmentClass = getTextAlignmentClass(align);

  return (
    <h2
      className={mergeClasses(
        alignmentClass,
        accent && "accent",
        "text-3xl font-bold",
      )}
    >
      {children}
    </h2>
  );
}
