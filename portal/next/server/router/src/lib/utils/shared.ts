import { encode } from 'next-auth/jwt'
import { prismaPortal } from '@magickml/portal-db'

interface PrepareTokenParams {
  // user: SignedInAuthObject | DuctTape
  user: {
    userId: string
    user: any
    orgId: string | null
  }
  projectId: string
}

// this function is duct tapped to support the old way of checking access
// the aide expects next-auth tokens but thats deprecated in the portal
// we can setup a similar method to hasAccess in the aide
// for now were just going to verify with hasAccess and write a new next-auth style token
export async function prepareToken(
  params: PrepareTokenParams
): Promise<string> {
  const access = await hasAccess(params)

  if (!access) {
    throw new Error('No access to project')
  }

  return await encode({
    token: {
      user: {
        id: params.user.userId,
        // email: params?.user?.user?.emailAddresses[0].emailAddress,
        permissions: ['owner:*'],
      },
      project: params.projectId,
    },
    secret: process.env?.['NEXTAUTH_SECRET'] as string,

    maxAge: 24 * 60 * 60, // 24 hours
  })
}

interface HasAccessParams {
  user: {
    userId: string
    orgId: string | null
  }
  projectId: string
}

export async function hasAccess(params: HasAccessParams): Promise<boolean> {
  return !!(await prismaPortal.project.findFirst({
    where: {
      id: params.projectId,
      owner: params.user.orgId || params.user.userId,
    },
  }))
}
