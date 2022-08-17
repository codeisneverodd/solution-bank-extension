import ErrorReportLayout from "../layout/errorReportLayout";
import { retryImage } from "../../../shared/images";
import colors from "../../../shared/constants/colors";
import React from "react";
import { linkTo } from "../../../shared/utils/chrome";
const Error = () => (
  <ErrorReportLayout
    iconSrc={retryImage}
    description={"다시 시도해주세요"}
    backgroundColor={colors.orange}
    fontSize={1.6}
    handleErrorClick={(e) => {
      linkTo(
        "https://github.com/codeisneverodd/programmers-coding-test/issues"
      );
    }}
  />
);

export default Error;
