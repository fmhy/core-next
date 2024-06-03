import { load } from '../lib/vp';

export default {
  async paths() {
    console.log(await load());
    return await load();
  }
};
