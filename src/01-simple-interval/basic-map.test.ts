import { numTwoTimes } from './basic-map'
import { createScheduler } from '../../test/utils/create-sheduler'
import { interval, Observable } from 'rxjs'
import { take, map } from 'rxjs/operators'

it('multiplies each number by 2', () => {
  createScheduler().run(({ cold, expectObservable }) => {
    const values = { a: 1, b: 2, c: 3, x: 2, y: 4, z: 6 }

    const numbers$ = cold('a-b-c-|', values) as Observable<number>
    const resultDiagram = 'x-y-z-|'

    expectObservable(numTwoTimes(numbers$)).toBe(resultDiagram, values)
  })
})

it('multiplies each number by 2', done => {
  const numbers$ = interval(1000).pipe(
    take(3),
    map(n => n + 1)
  )
  // This emits: --1--2--3--|
  // https://rxviz.com/v/1o7zmNp8

  const numbersTwoTimes$ = numTwoTimes(numbers$)

  const results: number[] = []

  numbersTwoTimes$.subscribe(
    n => {
      results.push(n)
    },
    err => {
      done(err)
    },
    () => {
      expect(results).toEqual([2, 4, 6])
      done()
    }
  )
})
