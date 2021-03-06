type State = {
  isLoading: boolean;
  auth: any;
  modal: any;
  yScrollPosition: number;
};

export const state: State = {
  // ----- GLOBAL props -----
  isLoading: false,
  auth: {
    jwtToken: null,
    isLoggedIn: undefined,
  },
  modal: {
    name: null,
    isVisible: false,
  },
  yScrollPosition: 0,
};
