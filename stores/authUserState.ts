import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const authUserState = atom({
  key: "authUserState",
  default: "",

  effects_UNSTABLE: [persistAtom],
});