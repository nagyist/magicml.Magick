import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

// The main atom containing all form data and settings
export const agentFormAtom = atomWithReset({
  name: '',
  image: null,
  personality: '',
});

// Deriving individual pieces from the main atom
export const agentNameAtom = atom(
  (get) => get(agentFormAtom).name,
  (get, set, newValue: string) =>
    set(agentFormAtom, { ...get(agentFormAtom), name: newValue })
);
export const agentImageAtom = atom(
  (get) => get(agentFormAtom).image,
  (get, set, newValue: any) =>
    set(agentFormAtom, { ...get(agentFormAtom), image: newValue })
);
export const agentPersonalityAtom = atom(
  (get) => get(agentFormAtom).personality,
  (get, set, newValue: string) =>
    set(agentFormAtom, { ...get(agentFormAtom), personality: newValue })
);

export const discordAtom = atomWithReset({
  enabled: false,
  token: '',
  applicationId: '',
  enableVoice: false,
  connectionEnabled: false,
});

export const agentProjectAtom = atomWithReset({
  name: 'New Project',
  id: null,
});
