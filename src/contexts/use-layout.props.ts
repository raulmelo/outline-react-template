export interface LayoutProps {
  waitChildren: boolean;
  fullLoading: boolean;
  user: any;
  loggedUser: boolean;
  setFullLoading: (value: boolean) => void;
  onLogout: () => void;
}
