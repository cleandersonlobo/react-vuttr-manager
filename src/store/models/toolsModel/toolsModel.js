import api from '../../../api/tools';

export const INITIAL_STATE = {
  isFetching: false,
  error: null,
  tools: null,
};

export const toolsModel = {
  state: INITIAL_STATE,
  reducers: {
    request: state => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    responseSuccess: (state, props) => ({
      ...state,
      isFetching: false,
      ...props,
    }),
    requestFailure: state => ({
      ...state,
      isFetching: false,
      error: true,
    }),
  },
  effects: dispatch => ({
    async getTools() {
      try {
        dispatch.toolsModel.request();
        const res = await api.get();
        if (res.status !== 200) throw new Error(res);
        dispatch.toolsModel.responseSuccess({
          tools: res.data,
        });
      } catch (error) {
        dispatch.toolsModel.requestFailure();
      }
    },
  }),
};
