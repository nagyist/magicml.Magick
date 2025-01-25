export type navProps = { target: string; newTab?: boolean };

export type dropDownMenuItemsType = {
  children: React.ReactNode;
  enabled: boolean;
  type: string;
  href?: string;
  id: string;
  action?: () => void;
  navigate?: ({ target, newTab }: navProps) => void;
  separator?: boolean;
  newTab?: boolean;
};
