interface UnauthorizedRedirect {
  destination: string
  message?: string
}

export const unauthorizedRedirect = ({
  destination,
  message = 'Unauthorized',
}: UnauthorizedRedirect) => {
  return {
    redirect: {
      destination: `${destination}#error=${message}`,
      permanent: false,
    },
  }
}
