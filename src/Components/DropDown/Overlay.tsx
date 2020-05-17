import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { DropDownItem } from './interfaces';

import styles from './Overlay.module.scss';

interface Props extends RouteComponentProps {
  className?: string;
  items?: DropDownItem[];
}

const Overlay: React.FC<Props> = (props) => {
  const { className, items, history } = props;
  const classNames: string = [styles.overlayContainer, className].join(' ');

  const handleOptionClick = (link?: string): void => {
    if (link) {
      history.push(link);
    }
  };

  return (
    <div className={classNames}>
      <ul className="dropdown-menu dropdown-menu-sw">
        {items?.length &&
          items.map((item: DropDownItem, index: number) => (
            <li key={index}>
              <a
                href={item.link}
                key={index}
                style={{ borderBottom: index + 1 < items.length ? '1px solid #e6e6e6' : '' }}
                className="dropdown-item"
                onClick={() => handleOptionClick(item.link)}
              >
                {item.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default withRouter(Overlay);
