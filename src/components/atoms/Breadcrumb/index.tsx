import clsx from "clsx";
import React from "react";
import { BreadcrumbValue } from "../../../types/common";
import "./index.scss";

type Props = {
  items?: BreadcrumbValue[];
};

const Breadcrumb: React.FC<Props> = ({ items }) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb__ul">
          {items?.map(({ label, key, url }) => (
            <li key={key} className="breadcrumb__li">
              <a
                {...(url ? { href: url } : {})}
                className={clsx(
                  url ? "breadcrumb__link" : "breadcrumb__link-not"
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
