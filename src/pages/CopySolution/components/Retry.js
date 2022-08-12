import ErrorReportLayout from "../layout/errorReportLayout";
import { retryImage } from "../../../shared/images";
import colors from "../../../shared/constants/colors";
import React from 'react';
const Retry = () => (
  <ErrorReportLayout
    iconSrc={retryImage}
    description={"다시 시도해주세요"}
    backgroundColor={colors.orange}
    fontSize={1.6}
  />
);

export default Retry;
