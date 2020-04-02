import React from 'react';
import { Layout, Row } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
    return <AntFooter><Row type="flex" justify="space-around">&copy; IdeaHub</Row></AntFooter>;
};

export default Footer;
