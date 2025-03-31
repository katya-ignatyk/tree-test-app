import { GetUserTreeResponse } from "api/user/tree/types";
import { WithChildren } from "lib/types";

export type TreeContextDeps = {
  data: GetUserTreeResponse | null;
  loading: boolean;
  error: string | null;
  mutate: () => Promise<void>;
};

export type TreeContextProviderProps = WithChildren;
