
export type Skill = {
  name: string;
  descrition: string;
  documentation: string | null;
}


export type role =
  | "backend"
  | "frontend"
  | "languages"
  | "libsAndFrameworks"
  | "tools"
  | null;
