import React from 'react';
import { Modal as AntdModal } from 'antd';
import { ModalProps } from 'antd/lib/modal';

import styles from './Modal.module.scss';

const Modal: React.FC<ModalProps> = (props) => {
  const { children, className, ...restProps } = props;
  const classNames: string = [styles.modal, className].join(' ');

  return (
    <AntdModal className={classNames} {...restProps}>
      {children}
    </AntdModal>
  );
};

export default Modal;
