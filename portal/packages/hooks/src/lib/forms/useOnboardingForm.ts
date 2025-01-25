"use client"

import { useState, ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export const onboardingFormSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  username: z.string().min(1, 'Username is required'),
  profilePhoto: z.string().optional(),
  bannerPhoto: z.string().optional(),
  birthday: z.date().max(new Date(), 'Birthday must be before current date'),
})

export type OnboardingFormData = z.infer<typeof onboardingFormSchema>

export const useOnboardingForm = (formSchema: z.ZodType<any, any>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnboardingFormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  const [formData, setFormData] = useState<OnboardingFormData>({
    firstName: '',
    lastName: '',
    birthday: new Date(),
    username: '',
    profilePhoto: '',
    bannerPhoto: '',
  })

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'file') e.preventDefault()

    const { name, type, files } = e.target

    if (type === 'file' && files && files[0]) {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(files[0])
      fileReader.onload = () => {
        setFormData(prevState => ({
          ...prevState,
          [name]: fileReader.result as string,
        }))
      }
    } else {
      setFormData(prevState => ({ ...prevState, [name]: e.target.value }))
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    formData,
    setFormData,
    handleInputChange,
  }
}
