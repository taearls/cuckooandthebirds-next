import { TextAlignment, TextAlignmentType } from "@/types/layout";
import {
  getTextAlignmentClass,
  mergeClasses,
} from "@/util/styling/styling.utils";

export type ParagraphProps = {
  children: React.ReactNode | React.ReactNode[];
  accent?: boolean;
  italic?: boolean;
  width?: string;
  alignment?: TextAlignmentType;
};

export default function Paragraph({
  children,
  accent = false,
  italic = false,
  width,
  alignment = TextAlignment.LEFT,
}: ParagraphProps) {
  const alignmentClass = getTextAlignmentClass(alignment);
  return (
    <p
      className={mergeClasses(
        accent && "accent",
        italic && "italic",
        width,
        alignmentClass,
        "text-lg leading-normal md:text-xl max-w-65ch",
      )}
    >
      {children}
    </p>
  );
}
