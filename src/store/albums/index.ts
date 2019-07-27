import { Module } from 'vuex';
import { AlbumsState } from './types';
import { RootState } from '../types';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const state: AlbumsState = {
    albums: [],
    sortOrder: 'Love',
    reception: 'All',
};

const namespaced = true;

export const albums: Module<AlbumsState, RootState> = {
    namespaced,
    state,
    actions,
    getters,
    mutations,
};
