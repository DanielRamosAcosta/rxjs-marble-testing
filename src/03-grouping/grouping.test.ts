import { grouping } from './grouping'
import { createScheduler } from '../../test/utils/create-sheduler'

it('generate the stream correctly', () => {
  const scheduler = createScheduler()

  scheduler.run(({ cold, expectObservable }) => {
    const numbers$ = cold('a---b---c---|', { a: 1, b: 2, c: 3 })

    const grouping$ = grouping(numbers$ as any)

    expectObservable(grouping$).toBe('----(ab)(bc)|', {
      a: 1,
      b: 2,
      c: 3
    })
  })
})
