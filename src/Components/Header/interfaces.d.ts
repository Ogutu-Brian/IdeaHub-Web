import { PageHeaderProps } from "antd/lib/page-header";

export interface JoinAndSignInProps {
  joinNow: () => void;
  signIn: () => void;
}

export interface Props extends PageHeaderProps, JoinAndSignInProps {}
