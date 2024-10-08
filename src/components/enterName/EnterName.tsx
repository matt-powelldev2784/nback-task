import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Dispatch, SetStateAction } from 'react'
import { screenT } from 'types/screenT'

type Inputs = {
  name: string
}

export const ideaValidationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .max(50, 'Name must be 50 characters or less')
})

interface EnterNameProps {
  setCurrentScreen: Dispatch<SetStateAction<screenT>>
}

export const EnterName = ({ setCurrentScreen }: EnterNameProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    resolver: yupResolver(ideaValidationSchema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('data', data)
    setCurrentScreen('game')
    reset() // reset form
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl bg-white p-2 py-14 shadow-lg flexCol sm:mt-4 sm:w-11/12 md:mt-16 md:max-w-[700px] md:px-12"
    >
      <label htmlFor="name" className="mb-2 text-2xl text-black sm:text-lg">
        Enter your name to begin:
      </label>
      <input
        {...register('name', { required: true })}
        placeholder="Name"
        autoFocus
        className="rounded-lg border border-gray-400 px-2 text-center text-lg outline-none flexCol focus:border focus:border-primaryBlue sm:h-10 sm:w-11/12 md:h-14 md:w-96"
      />
      <span className="mb-4 min-h-4 text-xs italic text-red-500">
        {errors.name ? errors.name.message : null}
      </span>

      <button
        type="submit"
        className="max-w-full rounded-xl bg-blue-800 text-xl tracking-wide text-white sm:w-11/12 sm:p-2 md:w-96 md:p-4"
      >
        Submit
      </button>
    </form>
  )
}
