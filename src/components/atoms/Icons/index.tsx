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

const FacebookIcon: React.FC<Props> = ({
  width = 20,
  height = 20,
  className,
  fill = "#333333",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 96.124 96.123"
    fill={fill}
  >
    <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"></path>
  </svg>
);

const TwitterIcon: React.FC<Props> = ({
  width = 20,
  height = 20,
  className,
  fill = "#333333",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 512 512"
    fill={fill}
  >
    <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z"></path>
  </svg>
);

const YoutubeIcon: React.FC<Props> = ({
  width = 20,
  height = 20,
  className,
  fill = "#333333",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 512 512"
    fill={fill}
  >
    <path
      d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80
        c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904
        C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728
        c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816
        c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096
        C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z"
    ></path>
  </svg>
);

const InstagramIcon: React.FC<Props> = ({
  width = 20,
  height = 20,
  className,
  fill = "#333333",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 512 512"
    fill={fill}
  >
    <path d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0"></path>
    <path d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0"></path>
    <path d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"></path>
  </svg>
);

export {
  BarsIcon,
  SearchIcon,
  BagShoppingIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
};
