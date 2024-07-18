
export type Skill = {
  name: string;
  description: string;
  documentation: string | null;
}


export type role =
  | "backend"
  | "frontend"
  | "languages"
  | "libsAndFrameworks"
  | "tools"
  | null;
