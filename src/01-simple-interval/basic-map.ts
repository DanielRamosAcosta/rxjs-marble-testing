import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export const numTwoTimes = (obs: Observable<number>) =>
  obs.pipe(map((x: number) => x * 2))
