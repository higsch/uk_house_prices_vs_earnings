<script>
    import { scaleLinear } from 'd3';

    import XAxis from './XAxis.svelte';
    import YAxis from './YAxis.svelte';
    import Dot from './Dot.svelte';

    export let data;
    export let xRange;
    export let yRange;

    const padding = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
    };

    let width, height;

    $: xScale = scaleLinear()
        .domain(xRange)
        .range([padding.left, width - padding.right]);
    
    $: yScale = scaleLinear()
        .domain(yRange)
        .range([height - padding.bottom, padding.top]);

    $: renderedData = data.map(d => ({
        ...d,
        x: xScale(d.earning),
        y: yScale(d.house_price)
    }));
</script>

<div
    class="chart"
    bind:clientWidth={width}
    bind:clientHeight={height}
>
    {#if (width && height && data.length)}
        <svg
            width={width}
            height={height}
        >
            <XAxis
                scale={xScale}
                offset={yScale.range()[0]}
            />
            <YAxis
                scale={yScale}
                offset={xScale.range()[0]}
            />
            {#each renderedData as { la_code, la_name, x, y } (la_code)}
                <Dot
                    x={x}
                    y={y}
                    r={width / 150}
                    name={la_name}
                />
            {/each}
        </svg>
    {/if}
</div>

<style>
    .chart {
        flex: 1;
        width: 100%;
        overflow: hidden;
    }
</style>