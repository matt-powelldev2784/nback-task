import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import Button from 'components/ui/button/Button'
import { AppContext } from 'components/App'

type Inputs = {
  name: string
}

export const ideaValidationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .max(50, 'Name must be 50 characters or less')
})

export const EnterName = () => {
  const { setCurrentScreen, setPlayerName } = useContext(AppContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    resolver: yupResolver(ideaValidationSchema),
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<Inputs> = ({ name }) => {
    setPlayerName(name)
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

      <Button
        classNames="max-w-full rounded-xl bg-blue-800 text-xl tracking-wide text-white active:opacity-90 sm:w-11/12 sm:p-2 md:w-96 md:p-4"
        text="Submit"
        type="submit"
      />
    </form>
  )
}
