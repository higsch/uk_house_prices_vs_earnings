// @ts-nocheck
import { readable } from 'svelte/store';
import { csv, autoType } from 'd3';

export const data = readable([], async (set) => {
    const data = await csv('data.csv', autoType);
    set(data);
});