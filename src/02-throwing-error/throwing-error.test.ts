import { throwingError } from './throwing-error'
import { createScheduler } from '../../test/utils/create-sheduler'

it('throw an error at the third element', () => {
  const scheduler = createScheduler()

  scheduler.run(({ cold, expectObservable }) => {
    const numbers$ = cold('a-b-c-|', { a: 1, b: 2, c: 3 })

    const throwingError$ = throwingError(numbers$ as any)

    expectObservable(throwingError$).toBe(
      'a-b-#',
      {
        a: 1,
        b: 2
      },
      new Error('Example!')
    )
  })
})
