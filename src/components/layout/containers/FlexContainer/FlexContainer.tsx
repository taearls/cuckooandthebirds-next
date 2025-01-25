import {
  AlignItemsCSSType,
  FlexFlowCSSType,
  GapCSSType,
  JustifyContentCSSType,
  ResponsiveValue,
} from "@/types/layout";
import {
  getAlignItemsClass,
  getFlexFlowClass,
  getGapClass,
  getJustifyContentClass,
  mergeClasses,
} from "@/util/styling/styling.utils";
import { ReactElement } from "react";

export type FlexContainerProps = {
  flexFlow?: FlexFlowCSSType;
  responsive?: {
    flexFlow?:
      | Array<ResponsiveValue<FlexFlowCSSType>>
      | ResponsiveValue<FlexFlowCSSType>;
    gapX?:
      | Array<ResponsiveValue<GapCSSType["value"]>>
      | ResponsiveValue<GapCSSType["value"]>;
    gapY?:
      | Array<ResponsiveValue<GapCSSType["value"]>>
      | ResponsiveValue<GapCSSType["value"]>;
    justifyContent?:
      | Array<ResponsiveValue<JustifyContentCSSType>>
      | ResponsiveValue<JustifyContentCSSType>;
    alignItems?:
      | Array<ResponsiveValue<AlignItemsCSSType>>
      | ResponsiveValue<AlignItemsCSSType>;
  };
  id?: string;
  gapX?: GapCSSType["value"];
  gapY?: GapCSSType["value"];
  justifyContent?: JustifyContentCSSType;
  alignItems?: AlignItemsCSSType;
  children: ReactElement | ReactElement[];
};

export default function FlexContainer({
  flexFlow,
  responsive,
  id,
  gapX,
  gapY,
  justifyContent,
  alignItems,
  children,
}: FlexContainerProps) {
  const flexFlowClass = getFlexFlowClass(flexFlow, responsive?.flexFlow);
  const justifyContentClass = getJustifyContentClass(
    justifyContent,
    responsive?.justifyContent,
  );
  const alignItemsClass = getAlignItemsClass(
    alignItems,
    responsive?.alignItems,
  );
  const gapXClass = getGapClass("x", gapX, responsive?.gapX);
  const gapYClass = getGapClass("y", gapY, responsive?.gapY);

  return (
    <div
      id={id}
      className={mergeClasses(
        "flex",
        flexFlowClass,
        justifyContentClass && justifyContentClass.toString(),
        alignItemsClass && alignItemsClass.toString(),
        gapXClass,
        gapYClass,
      )}
    >
      {children}
    </div>
  );
}
