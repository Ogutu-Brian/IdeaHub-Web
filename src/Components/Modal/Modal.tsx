import React, { CSSProperties } from 'react';
import { Modal as AntdModal } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import { useMedia } from 'react-use';

import styles from './Modal.module.scss';
import { DeviceMeasures } from '../../utils';

const Modal: React.FC<ModalProps> = (props) => {
  const { children, className, style, ...restProps } = props;
  const classNames: string = [styles.modal, className].join(' ');
  const isMobile: boolean = useMedia(DeviceMeasures.MOBILE);
  const inlineStyle: CSSProperties = {
    ...style,
    top: isMobile ? 8 : undefined,
  };

  return (
    <AntdModal className={classNames} style={inlineStyle} {...restProps}>
      {children}
    </AntdModal>
  );
};

export default Modal;
