import React from 'react'
import { Box, Typography, TextField, SxProps } from '@mui/material'

const sxProps: SxProps = {
  display: 'grid',
  placeItems: 'center',
  width: '100%',
  height: 'auto',
  backgroundClip: 'padding-box',
  // border: '1px solid #4a5568',
  // borderRadius: '0.9375rem',
  transition:
    'box-shadow 150ms ease, border-color 150ms ease, padding 150ms ease',
  '& .MuiInputBase-input': {
    backgroundColor: '#342E58 !important',
    color: '#fff !important',
    fontSize: '0.875rem !important',
    width: '100%',
    borderRadius: '0.9375rem',

    '&::-webkit-input-placeholder': {},
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '0.9375rem',
    border: '2px solid #4a5568',
    '& fieldset': {
      border: 'none',
    },
  },
}

interface InputFieldProps {
  label: string
  type?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  checkFormValidity?: () => void
  rows?: number
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  checkFormValidity,
  rows,
}) => {
  return (
    <Box mb={2}>
      <Box mb={0} ml={0.5}>
        <Typography
          component="label"
          variant="button"
          color="white"
          fontWeight="medium"
          sx={{ textTransform: 'none' }}
        >
          {label}
        </Typography>
      </Box>

      <TextField
        type={type}
        placeholder={placeholder}
        variant="outlined"
        size="small"
        fullWidth
        value={value}
        rows={rows || 1}
        onChange={e => {
          onChange(e.target.value)
          if (checkFormValidity) {
            checkFormValidity()
          }
        }}
        sx={sxProps}
      />
    </Box>
  )
}
