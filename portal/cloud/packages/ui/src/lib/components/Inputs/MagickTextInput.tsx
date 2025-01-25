"use client"

import { useState, useRef, useEffect } from 'react'
import { toast } from 'react-hot-toast'

interface MagickTextInputProps {
  defaultValue: string
  onSave: (value: string) => Promise<void>
  className?: string
  minLength?: number
  maxLength?: number
  children?: React.ReactNode
  disabled?: boolean
  type?: 'input' | 'textarea'
  rows?: number
}

export const MagickTextInput: React.FC<MagickTextInputProps> = ({
  defaultValue,
  onSave,
  className,
  minLength = 3,
  maxLength,
  children,
  disabled,
  type = 'input',
  rows = 3,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const [loading, setLoading] = useState(false)

  const ref = useRef<HTMLInputElement & HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus()
    }
  }, [isEditing])

  const handleBlur = async () => {
    if (loading) return
    if (value === defaultValue) {
      setIsEditing(false)
      return
    }
    if (value.length >= minLength) {
      if (maxLength && value.length > maxLength) {
        toast.error(`Text must be no more than ${maxLength} characters long.`)
      } else {
        setLoading(true)
        await onSave(value)
        setLoading(false)
      }
    } else {
      toast.error(`Text must be at least ${minLength} characters long.`)
    }

    setIsEditing(false)
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    if (event.key === 'Enter') {
      handleBlur()
    }
  }

  return isEditing && !disabled ? (
    <div className="relative">
      {type === 'input' ? (
        <input
          ref={ref}
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={` font-sans ${className}`}
          maxLength={maxLength}
        />
      ) : (
        <textarea
          ref={ref}
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={`font-sans ${className}`}
          maxLength={maxLength}
          rows={rows}
        />
      )}
      {loading && (
        <span className="absolute text-white right-1 loading loading-xs top-1" />
      )}
    </div>
  ) : (
    <div className="gap-x-1 font-sans" onClick={() => setIsEditing(true)}>
      {children || defaultValue}
    </div>
  )
}
