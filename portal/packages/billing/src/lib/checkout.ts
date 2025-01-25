import { CreateCheckoutInput } from './stripeService'

const successUrl = `${process.env.APP_URL}/billing`
const cancelUrl = `${process.env.APP_URL}/billing`

const baseSub = {
  priceType: 'recurring' as 'recurring' | 'one_time',
  successUrl,
  cancelUrl,
  amount: undefined,
}

const makeApprenticeSub = (customerId: string): CreateCheckoutInput => {
  return {
    ...baseSub,
    price: 'Apprentice',
    customerId,
  }
}

const makeWizardSub = (customerId: string): CreateCheckoutInput => {
  return {
    ...baseSub,
    price: 'Wizard',
    customerId,
  }
}

const makeAddBalance = (
  customerId: string,
  amount: number
): CreateCheckoutInput => {
  return {
    ...baseSub,
    priceType: 'one_time',
    price: 'Balance',
    customerId,
    amount,
  }
}

export { makeApprenticeSub, makeWizardSub, makeAddBalance }
