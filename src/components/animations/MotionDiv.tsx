"use client";

import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

export const MotionDiv = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => <motion.div ref={ref} {...props} />
);

MotionDiv.displayName = "MotionDiv";

export default MotionDiv;
