import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import styles from './Icon.module.scss';

const Icon: React.FC<FontAwesomeIconProps> = props => <FontAwesomeIcon icon={props.icon} size="lg" className={styles.icon} />;

export default Icon;
