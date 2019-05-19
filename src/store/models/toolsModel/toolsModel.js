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
    async addTool({ tool, tools }) {
      try {
        dispatch.toolsModel.request();
        const res = await api.post(tool);
        if (res.status !== 201) throw new Error(res);
        const { data } = res;
        dispatch.toolsModel.responseSuccess({
          tools: [...tools, data],
        });
      } catch (error) {
        dispatch.toolsModel.requestFailure();
      }
    },
    async search(input) {
      try {
        dispatch.toolsModel.request();
        const res = await api.search(input);
        if (res.status !== 200) throw new Error(res);
        const { data } = res;
        dispatch.toolsModel.responseSuccess({
          tools: data,
        });
      } catch (error) {
        dispatch.toolsModel.requestFailure();
      }
    },
    async searchByTag(tag) {
      try {
        dispatch.toolsModel.request();
        const res = await api.searchByTag(tag);
        if (res.status !== 200) throw new Error(res);
        const { data } = res;
        dispatch.toolsModel.responseSuccess({
          tools: data,
        });
      } catch (error) {
        dispatch.toolsModel.requestFailure();
      }
    },
    async deleteTool({ tools, id }) {
      try {
        dispatch.toolsModel.request();
        const res = await api.delete(id);
        if (res.status !== 200) throw new Error(res);
        const toolsFilter = tools.filter(it => it.id !== id);
        dispatch.toolsModel.responseSuccess({
          tools: toolsFilter,
        });
      } catch (error) {
        dispatch.toolsModel.requestFailure();
      }
    },
  }),
};
