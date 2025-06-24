import { ADMIN, ANONYMOUS, Role, TESTER, USER } from '@magickml/portal-config'

type AuthArg = Role | undefined | null

export const authorizeAnonymous = (role: AuthArg) =>
  role !== ANONYMOUS && authorizeUser(role)
export const authorizeUser = (role: AuthArg) =>
  role !== USER && authorizeTester(role)
export const authorizeTester = (role: AuthArg) =>
  role !== TESTER && authorizeAdmin(role)
export const authorizeAdmin = (role: AuthArg) => role !== ADMIN
