import { v4 as uuidv4 } from "uuid";

// initial state
const state = () => ({
  all: [],
});
const getters = {
  active(state) {
    
  },
  completed(state) {
    
  }
};

const actions = {};

const mutations = {
  create() {
    
  },
  toggleStatus() {
    
  },
  delete() {
   
  },
  clearCompleted() {
    
  }
};

export const todos = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
