import { Observable, from } from 'rxjs'
import { pairwise, switchMap } from 'rxjs/operators'

export const grouping = (obs: Observable<number>) =>
  obs.pipe(
    pairwise(),
    switchMap(x => from(x))
  )
