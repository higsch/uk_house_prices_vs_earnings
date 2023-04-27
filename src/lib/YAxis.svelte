<script>
    import { format } from 'd3';

    export let scale;
    export let offset;

    const formatNumber = format('.2s');

    $: ticks = scale.ticks(5);
</script>

<g
    class="y-axis"
    transform="translate({offset} 0)"
>
    <line
        x1="0"
        y1={scale(ticks[0])}
        x2="0"
        y2={scale(ticks.slice(-1)[0])}
    />
    {#each ticks as tick}
        <g
            class="tick"
            transform="translate(0 {scale(tick)})"
        >
            <line
                x1="0"
                x2="-6"
            />
            <text
                x="-9"
                dy="7"
                text-anchor="end"
            >
                {formatNumber(tick)}
            </text>
        </g>
    {/each}
    <g
        transform="translate(7 {scale(ticks.slice(-1)[0]) + 7})"
    >
        <text
            text-anchor="start"
        >
            &#8593; Median house prices in £
        </text>
    </g>
</g>

<style>
    text {
        font-weight: 200;
    }
</style>