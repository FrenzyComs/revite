import { API } from "frenzy.js";

export type RoleOrDefault = (
    | API.Role
    | {
          name: string;
          permissions: number;
          colour?: string;
          hoist?: boolean;
          rank?: number;
      }
) & { id: string };
