import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export const throwingError = (obs: Observable<number>) =>
  obs.pipe(
    map((x: number) => {
      if (x === 3) {
        throw new Error('Example!')
      }
      return x
    })
  )
