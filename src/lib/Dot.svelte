<script>
    export let x;
    export let y;
    export let r;
    export let name;
</script>

<g
    id={name}
    transform="translate({x} {y})"
>
    <circle
        cx="0"
        cy="0"
        r={r}
    />
</g>

<style>
    g {
        transition: all, 400ms;
    }

    circle {
        fill: #00b4d8;
        stroke: none;
        opacity: 0.7;
    }
</style>