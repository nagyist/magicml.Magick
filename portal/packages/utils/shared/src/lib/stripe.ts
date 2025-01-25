export enum PriceKeys {
  Balance = 'price_1OV9nVAppV38CWoMzmNyU9v0',
  Apprentice = 'price_1OePMwAppV38CWoMtaAOYka5',
  Wizard = 'price_1OePNRAppV38CWoMByOMOypO',
}

export enum ProductKeys {
  Balance = 'prod_PJnOSnUwv1GSFB',
  Apprentice = 'prod_PTM5K8YKBkQxdZ',
  Wizard = 'prod_PTM56r6mUK6r0M',
}

export type PriceKey = keyof typeof PriceKeys

export enum PortalCheckouts {
  APPRENTICE = 'APPRENTICE',
  WIZARD = 'WIZARD',
  BALANCE = 'BALANCE',
}

export enum PortalSubscriptions {
  NEOPHYTE = 'NEOPHYTE',
  APPRENTICE = 'APPRENTICE',
  WIZARD = 'WIZARD',
}
