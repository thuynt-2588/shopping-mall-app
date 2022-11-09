import React from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
};

const BarsIcon: React.FC<Props> = ({
  width = 18,
  height = 18,
  className,
  fill = "#333333",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 16"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 15.985v-2h24v2H0zm0-9h24v2H0v-2zm0-7h24v2H0v-2z" />
  </svg>
);

const SearchIcon: React.FC<Props> = ({
  width = 21,
  height = 21,
  className,
  fill = "#222",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 21 21"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.7178 14.5735L11.0336 10.6129C11.9809 9.44901 12.4999 7.98455 12.4999 6.45999C12.4999 2.89801 9.69612 0 6.24995 0C2.80378 0 0 2.89801 0 6.45999C0 10.022 2.80378 12.92 6.24995 12.92C7.54369 12.92 8.77656 12.5167 9.83063 11.751L13.5428 15.7416C13.698 15.9082 13.9067 16 14.1303 16C14.342 16 14.5428 15.9166 14.6953 15.7649C15.0192 15.4428 15.0295 14.9085 14.7178 14.5735ZM6.24995 1.68522C8.79722 1.68522 10.8695 3.82713 10.8695 6.45999C10.8695 9.09286 8.79722 11.2348 6.24995 11.2348C3.70269 11.2348 1.63042 9.09286 1.63042 6.45999C1.63042 3.82713 3.70269 1.68522 6.24995 1.68522Z" />
  </svg>
);

const BagShoppingIcon: React.FC<Props> = ({
  width = 18,
  height = 18,
  className,
  fill = "#222",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 19 23"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z" />
  </svg>
);

const CloseIcon: React.FC<Props> = ({
  width = 20,
  height = 20,
  className,
  fill = "rgba(255, 255, 255, 0.85)",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 14"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
  </svg>
);

const ChevronDownIcon: React.FC<Props> = ({
  width = 10,
  height = 6,
  className,
  fill = "rgba(255, 255, 255, 0.85)",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 10 6"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.66609 0.743872C9.34109 0.418872 8.81609 0.418872 8.49109 0.743872L5.25775 3.9772L2.02442 0.743872C1.69942 0.418872 1.17442 0.418872 0.84942 0.743872C0.52442 1.06887 0.52442 1.59387 0.84942 1.91887L4.67442 5.74387C4.99942 6.06887 5.52442 6.06887 5.84942 5.74387L9.67442 1.91887C9.99109 1.60221 9.99109 1.06887 9.66609 0.743872Z" />
  </svg>
);

const ChevronUpIcon: React.FC<Props> = ({
  width = 10,
  height = 6,
  className,
  fill = "rgba(255, 255, 255, 0.85)",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 10 6"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.33755 5.74381C9.66255 5.41881 9.66255 4.89381 9.33755 4.56881L5.51255 0.743811C5.18755 0.418811 4.66255 0.418811 4.33755 0.743811L0.512549 4.56881C0.187549 4.89381 0.187549 5.41881 0.512549 5.74381C0.837549 6.06881 1.36255 6.06881 1.68755 5.74381L4.92922 2.51048L8.16255 5.74381C8.48755 6.06048 9.02088 6.06048 9.33755 5.74381Z" />
  </svg>
);

export {
  BarsIcon,
  SearchIcon,
  BagShoppingIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
};
