import * as Types from "../types/main";

const initialState = {
  isLoadingNatal: false,
  natal: [],
};

export default function index(state = initialState, action) {
  switch (action.type) {
    case Types.LOAD_NATAL_START: {
      return {
        ...state,
      };
    }
    case Types.LOAD_NATAL_SUCCESS: {
      return {
        ...state,
        natal: [action.payload],
        isLoadingNatal: true,
      };
    }
    case Types.LOAD_NATAL_FAILED: {
      return {
        ...state,
        isLoadingNatal: false,
      };
    }

    default:
      return state;
  }
}
