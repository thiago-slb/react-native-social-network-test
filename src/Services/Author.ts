import {delay} from '../FakeData';
import {Author} from '../Types/User.types';

export async function getAuthors(): Promise<Author[]> {
  await delay(500);
  return [];
}
