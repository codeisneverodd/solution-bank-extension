import ErrorReportLayout from "../layout/errorReportLayout";
import { successImage } from "../../../shared/images";
import colors from "../../../shared/constants/colors";
import React from 'react';
const Success = () => (
  <ErrorReportLayout
    iconSrc={successImage}
    description={"정답 복사됨"}
    backgroundColor={colors.green}
    fontSize={2.2}
  />
);

export default Success;
