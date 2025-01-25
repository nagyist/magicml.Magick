import { prismaPortal, TransactionSource } from '@magickml/portal-db'
export { TransactionSource, type Transaction } from '@magickml/portal-db'

export async function recordTransaction(
  userId: string,
  projectId: string,
  cost: number,
  success: boolean,
  source: TransactionSource
) {
  await prismaPortal.transaction.create({
    data: {
      userId,
      projectId,
      cost,
      success,
      source,
    },
  })
}
