import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

import { DropDownItem } from './interfaces';

import styles from './Overlay.module.scss';

interface Props extends RouteComponentProps {
  className?: string;
  items?: DropDownItem[];
}

const Overlay: React.FC<Props> = (props) => {
  const { className, items } = props;
  const classNames: string = [styles.overlayContainer, className].join(' ');

  return (
    <div className={classNames}>
      <ul className="dropdown-menu dropdown-menu-sw">
        {items?.length &&
          items.map((item: DropDownItem, index: number) => (
            <li key={index}>
              <Link
                to={item.link ? item.link : ''}
                style={{ borderBottom: index + 1 < items.length ? '1px solid #e6e6e6' : '' }}
                className="dropdown-item"
              >
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default withRouter(Overlay);
