import React, { ChangeEvent, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, Input, DatePicker } from '@magickml/client-ui'
import clsx from 'clsx'
import { api } from '@magickml/portal-server-provider'
import toast from 'react-hot-toast'
import {
  OnboardingFormData,
  onboardingFormSchema,
  useOnboardingForm,
} from '@magickml/portal-hooks'

type Step = {
  title: string
  show: boolean
  inputs?: {
    type: 'text' | 'date' | 'file'
    label: string
    name: string
    value?: string
  }[]
}

type OnboardingProps = {
  setShow: (show: boolean) => void
}

export const Onboarding: React.FC<OnboardingProps> = ({ setShow }) => {
  const {
    // register,
    handleSubmit,
    // errors,
    formData,
    setFormData,
    handleInputChange,
  } = useOnboardingForm(onboardingFormSchema)

  const [currentIndex, setCurrentIndex] = useState(0)

  const steps: Step[] = [
    {
      title: 'Hello. Lets get started.',
      show: true,
      inputs: [
        { type: 'text', label: 'First Name', name: 'firstName' },
        { type: 'text', label: 'Last Name', name: 'lastName' },
        { type: 'date', label: 'Birthday', name: 'birthday' },
      ],
    },
    {
      title: "Let's set up your profile.",
      show: false,
      inputs: [
        { type: 'text', label: 'Username', name: 'username' },
        { type: 'file', label: 'Profile Photo', name: 'profilePhoto' },
      ],
    },
    {
      title: `Welcome to Magick ${formData.username}!`,
      show: false,
    },
  ]

  const lastIndex = steps.length - 1

  const swipeConfidenceThreshold = 10000

  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity

  const getDirection = (newIndex: number) => {
    return newIndex > currentIndex ? 1 : -1
  }

  const paginate = (newIndex: number) => {
    if (newIndex < 0 || newIndex > lastIndex) return
    setCurrentIndex(newIndex)
  }

  const variants = {
    enter: (newIndex: number) => ({
      opacity: 0,
      x: getDirection(newIndex) > 0 ? -100 : 100,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      x: 0,
    },
    exit: (newIndex: number) => ({
      zIndex: 0,
      opacity: 0,
      x: getDirection(newIndex) > 0 ? -100 : 100,
    }),
  }

  const utils = api.useUtils()
  const { mutateAsync: updateUser, isLoading: isUpdatingUser } =
    api.users.updateUser.useMutation({
      onSuccess: async () => {
        toast.success('Onboarding complete!')
        setShow(false)
        await utils.users.invalidate()
      },
      onError: () => {
        toast.error('Something went wrong.')
      },
    })

  const handleFormSubmit = async (data: OnboardingFormData) => {
    console.log('submitting form')
    await updateUser({
      name: data.username,
      base64Image: data.profilePhoto ?? '',
      profileOnboarding: true,
      username: data.username,
    })

    await utils.users.invalidate()
  }

  const showNextButton = (index: number) => {
    if (index === 0) {
      return (
        formData.firstName.length > 0 &&
        formData.lastName.length > 0 &&
        formData.birthday !== undefined
      )
    } else if (index === 1) {
      return formData.username.length > 0
    } else {
      return true
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 40,
      }}
      key="onboarding-container"
      className="fixed inset-0 z-[1000] h-screen overflow-hidden dark:bg-black/40 backdrop-blur-sm bg-white/40"
    >
      <div className="flex h-screen text-black lg:pt-40 lg:max-w-4xl lg:mx-auto lg:h-fit min-w-screen dark:text-white">
        <div
          className={clsx(
            // borderStyles.glow,
            'w-full min-h-[640px] gap-y-1.5 flex flex-col justify-between h-screen lg:h-full pt-16 gap-x-4 mx-auto text-gray-600 bg-white dark:bg-[#101112]'
          )}
        >
          <div className="relative w-full overflow-hidden">
            <AnimatePresence
              //  mode="wait"
              initial={true}
              custom={currentIndex}
            >
              <motion.form
                onSubmit={handleSubmit(handleFormSubmit)}
                key={currentIndex}
                custom={currentIndex}
                variants={variants}
                layout
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 40 },
                  opacity: { duration: 0.15 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(Math.max(0, currentIndex + 1))
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(Math.max(0, currentIndex - 1))
                  }
                }}
                className="text-center lg:mx-4 flex-flex-col"
              >
                <div
                  className="w-64 h-64 mx-auto mb-10 overflow-hidden bg-center bg-cover border rounded-full"
                  style={{
                    backgroundImage: `url(${
                      currentIndex === 0
                        ? '/images/magick-icon.png'
                        : formData.profilePhoto &&
                          formData.profilePhoto.length > 0
                        ? formData.profilePhoto
                        : '/images/agent.png'
                    })`,
                  }}
                />
                <h2 className="mb-3 text-xl font-bold text-secondary-highlight">
                  {steps[currentIndex].title}
                </h2>
                {steps[currentIndex].inputs && (
                  <StepForm
                    step={steps[currentIndex]}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    setFormData={setFormData}
                  />
                )}

                <div className="grow" />
                <StepIndicator
                  steps={steps.length}
                  currentStep={currentIndex}
                />

                <div className="inline-flex justify-between w-full px-4 pb-8">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => paginate(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                    className="disabled:opacity-0"
                  >
                    Back
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    onClick={() => {
                      if (currentIndex === lastIndex) {
                        handleSubmit(handleFormSubmit)()
                      } else {
                        paginate(Math.min(lastIndex, currentIndex + 1))
                      }
                    }}
                    disabled={!showNextButton(currentIndex)}
                    className="relative font-semibold text-black disabled:opacity-0"
                  >
                    {isUpdatingUser ? (
                      <span className="text-black loading-spinner loading loading-sm " />
                    ) : currentIndex === lastIndex ? (
                      'Finish'
                    ) : (
                      'Next'
                    )}
                  </Button>
                </div>
              </motion.form>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

type StepIndicatorProps = {
  steps: number
  currentStep: number
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className="flex justify-center pt-4">
      {Array.from({ length: steps }).map((_, index) => (
        <span
          key={index}
          className={`w-2 h-2 rounded-full mx-1 ${
            index === currentStep
              ? 'bg-secondary-highlight'
              : 'bg-transparent border border-secondary-highlight'
          }`}
        ></span>
      ))}
    </div>
  )
}

type StepFormProps = {
  step: {
    title: string
    inputs?: {
      type: 'text' | 'date' | 'file'
      label: string
      name: string
      value?: string
    }[]
  }
  formData: any
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  setFormData: (value: any) => void
}

const StepForm: React.FC<StepFormProps> = ({
  step,
  formData,
  handleInputChange,
  setFormData,
}) => {
  return (
    <>
      {step.inputs?.map(input =>
        input.type === 'date' ? (
          <div key={input.name} className="mx-2 py-1.5">
            <DatePicker
              value={formData[input.name as keyof FormData] as Date}
              onChange={(date: Date) => {
                setFormData((prevState: any) => ({
                  ...prevState,
                  [input.name]: date,
                }))
              }}
              placeholder="Enter your birthday"
            />
          </div>
        ) : (
          <div key={input.name} className="mx-2 py-1.5">
            <Input
              type={input.type}
              name={input.name}
              value={
                input.type === 'file'
                  ? undefined
                  : (formData[input.name as keyof FormData] as string) ?? ''
              }
              accept="image/*"
              onChange={handleInputChange}
              placeholder={input.label}
            />
          </div>
        )
      )}
    </>
  )
}
