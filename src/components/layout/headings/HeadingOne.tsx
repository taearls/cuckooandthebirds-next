import { getTextAlignmentClass } from "@/util";

import { HeadingProps } from "./types";

export default function HeadingOne({
  children,
  align = "center",
}: HeadingProps) {
  const alignmentClass = getTextAlignmentClass(align);
  return (
    <h1 className={`${alignmentClass} accent mb-4 text-4xl font-extrabold`}>
      {children}
    </h1>
  );
}
