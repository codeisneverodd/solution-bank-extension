import ErrorReportLayout from "../layout/errorReportLayout";
import { successImage } from "../../../shared/images";
import colors from "../../../shared/constants/colors";
import React from "react";
import { linkTo } from "../../../shared/utils/chrome";
import { ISSUE_LINK } from "../../../shared/constants/links";
const Success = () => (
  <ErrorReportLayout
    iconSrc={successImage}
    description={"정답 복사됨"}
    backgroundColor={colors.green}
    fontSize={2.2}
    handleErrorClick={(e) => {
      linkTo(ISSUE_LINK);
    }}
  />
);

export default Success;
