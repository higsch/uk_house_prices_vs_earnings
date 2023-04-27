<script>
    import { format } from 'd3';

    export let scale;
    export let offset;

    const formatNumber = format('.2s');

    $: ticks = scale.ticks(5);
</script>

<g
    class="x-axis"
    transform="translate(0 {offset})"
>
    <line
        x1={scale(ticks[0])}
        y1="0"
        x2={scale(ticks.slice(-1)[0])}
        y2="0"
    />
    {#each ticks as tick}
        <g
            class="tick"
            transform="translate({scale(tick)} 0)"
        >
            <line
                y1="0"
                y2="6"
            />
            <text
                y="9"
                dy="0.71em"
                text-anchor="middle"
            >
                {formatNumber(tick)}
            </text>
        </g>
    {/each}
    <g
        transform="translate({scale.range()[1] - 16} -7)"
    >
        <text
            text-anchor="end"
        >
            &#8594; Median annual earnings in £
        </text>
    </g>
</g>

<style>
    text {
        font-weight: 200;
    }
</style>