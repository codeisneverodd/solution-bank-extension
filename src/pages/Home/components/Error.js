import ErrorReportLayout from "../layout/errorReportLayout";
import { retryImage } from "../../../shared/images";
import colors from "../../../shared/constants/colors";
import React from "react";
import { linkTo } from "../../../shared/utils/chrome";
import { ISSUE_LINK } from "../../../shared/constants/links";
const Error = () => (
  <ErrorReportLayout
    iconSrc={retryImage}
    description={"새로고침 후 다시 시도해주세요"}
    backgroundColor={colors.orange}
    fontSize={1.4}
    handleErrorClick={(e) => {
      linkTo(ISSUE_LINK);
    }}
  />
);

export default Error;
