import { NonEmptyString } from '../../common/type';
import { Definition } from './definition';
import { Episode } from './episode';

const validateEmptyString = (val: string): NonEmptyString => {
  if (val.length === 0) {
    throw new Error('value is empty string');
  }

  return val as NonEmptyString;
};

/**
 * Represent declarative memory
 */
export class Term {
  readonly name: string;
  readonly definition = new Definition();
  readonly episodes: Episode[] = [];

  constructor(name: string) {
    this.name = validateEmptyString(name);
  }

  addEpisode(episode: Episode) {
    this.episodes.push(episode);
  }
}
