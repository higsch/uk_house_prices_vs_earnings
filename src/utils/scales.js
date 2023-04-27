import { scaleLinear } from 'd3';

const padding = 16;

export const getScales = (width, height, data) => {
    const xData = data.map(d => [d.ea_2012, d.ea_2022]).flat();
    const yData = data.map(d => [d.hp_2012, d.hp_2022]).flat();

    const xScale = scaleLinear()
        .domain([0, Math.max(...xData)])
        .range([padding, width - padding]);

    const yScale = scaleLinear()
        .domain([0, Math.max(...yData)])
        .range([height - padding, padding]);

    return [xScale, yScale];
};