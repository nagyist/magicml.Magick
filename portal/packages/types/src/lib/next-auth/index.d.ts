import { DefaultSession, DefaultUser } from 'next-auth'
import {
  User as PrismaUser,
  Session as PrismaSession,
} from '@magickml/portal-db'
import { Role } from 'config/roles'
interface ExtendedUser extends DefaultUser, PrismaUser {
  subscription?: string
  role: Role
}

declare module 'next-auth' {
  interface User extends DefaultUser, PrismaUser {}

  interface Session extends DefaultSession, PrismaSession {
    user: ExtendedUser
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User
    project?: string
    permissions?: string[]
  }
}
