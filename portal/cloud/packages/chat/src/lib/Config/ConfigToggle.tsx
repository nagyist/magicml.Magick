import { Switch } from '@headlessui/react'
import clsx from 'clsx'

interface Props {
  value: boolean
  className?: string
  disabled?: boolean
  onChange: (value: boolean) => void
}

export default function ConfigToggle({
  value,
  disabled,
  className,
  onChange,
}: Props) {
  return (
    <Switch
      checked={value}
      onChange={onChange}
      disabled={disabled}
      className={`${className} relative bg-light-grey inline-flex h-2 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-offset-2`}
    >
      <span
        aria-hidden="true"
        className={clsx(
          value ? 'translate-x-5' : 'translate-x-[-1px]',
          disabled ? 'bg-[#4D4D4D]' : '',
          'pointer-events-none inline-block h-6 w-6 translate-y-[-10px] transform rounded-full bg-[#BADDE4] shadow ring-0 transition duration-200 ease-in-out'
        )}
      />
    </Switch>
  )
}
