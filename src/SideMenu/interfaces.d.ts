export interface Props extends MenuProps {
  collapsed: boolean | undefined;
  openDrawer: boolean;
  closeDrawer: () => void;
}
