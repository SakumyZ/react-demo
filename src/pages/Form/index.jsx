// import React, { useEffect } from 'react'
// import { useForm } from 'react-hook-form'

// /**
//  * Form
//  *
//  * @returns { React.FC } Form
//  */
// export default function Form() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors }
//   } = useForm()

//   const onSubmit = data => console.log(data)

//   // console.log(watch('example')) // watch input value by passing the name of it
//   const watchExample = watch('example')

//   useEffect(() => {
//     console.log(watchExample)
//   }, [watchExample])

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register('example')} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register('exampleRequired', { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}

//       <input type="submit" />
//     </form>
//   )
// }

import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Box from '@mui/material/Box'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'

/**
 * Contorl Form
 *
 * @returns { React.FC } Contorl Form
 */
export default function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: ''
    }
  })
  const onSubmit = data => console.log(data)

  const [value, setValue] = React.useState(new Date())

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        rules={{
          required: { value: true, message: '必须输入' },
          maxLength: { value: 3, message: '不能超过 3 个字符' }
        }}
        render={({ field }) => {
          return (
            <>
              <input {...field} type="text" />
              {errors.firstName && <span>{errors.firstName.message}</span>}
            </>
          )
        }}
      />
      <input type="submit" />

      <Button variant="contained">Contained</Button>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Custom input"
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          inputFormat="yyyy/MM/dd"
          renderInput={({ inputRef, inputProps, InputProps }) => {
            if (value) {
              inputProps.error = isNaN(value?.getTime())
            }
            return (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Input ref={inputRef} {...inputProps} />
                {InputProps?.endAdornment}
              </Box>
            )
          }}
        />
      </LocalizationProvider>
    </form>
  )
}
