import { atom } from "jotai";
import Cookies from "js-cookie";

type WorkspaceCookie = {
  id: string;
  name: string;
};

// Define default workspace
export const defaultWorkspace: WorkspaceCookie = {
  id: "",
  name: "",
};

// export const workspaceAtom = atom({
//   id: '',
//   name: '',
// });

// Atom to store the current workspace state
export const workspaceAtom = atom<WorkspaceCookie>(defaultWorkspace);

// Atom to set/update the workspace cookie
export const setWorkspaceAtom = atom(
  (get) => get(workspaceAtom),
  (get, set, newWorkspace: WorkspaceCookie) => {
    // Store the new workspace in a cookie
    Cookies.set("workspace", JSON.stringify(newWorkspace));

    // Update the state atom
    return set(workspaceAtom, newWorkspace);
  }
);

export const sidebarAtom = atom(false);

export const createProjectOpenAtom = atom(false);

export const renameProjectModalAtom = atom({
  open: false,
  projectId: "",
  projectName: "",
});

export const deleteProjectModalAtom = atom({
  open: false,
  projectId: "",
  projectName: "",
});

export const inviteMemberModalAtom = atom({
  open: false,
  emails: [] as string[],
  projectId: "",
});

export const themeAtom = atom<"light" | "dark">("light");
