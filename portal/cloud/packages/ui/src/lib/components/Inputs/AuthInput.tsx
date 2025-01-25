interface Props {
  placeholder: string
  className: string
  onChange: () => void
}

export const AuthInput = ({ placeholder, className, onChange }: Props) => {
  return (
    <input
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  )
}
