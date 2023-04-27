<script>
    import { data } from './stores/data';

    import Header from './lib/Header.svelte';
    import Select from './lib/Select.svelte';
    import Chart from './lib/Chart.svelte';
    import Footer from './lib/Footer.svelte';

    let selected_year = 2012;

    $: xRange = [0, Math.max(...$data.map(d => [d.ea_2012, d.ea_2022]).flat())];
    $: yRange = [0, Math.max(...$data.map(d => [d.hp_2012, d.hp_2022]).flat())];

    $: selected_data = $data.map(d => {
        return {
            la_code: d.la_code,
            la_name: d.la_name,
            earning: d[`ea_${selected_year}`],
            house_price: d[`hp_${selected_year}`]
        };
    });
</script>

<Header />
<Select
    bind:selected_year={selected_year}
/>
<Chart
    data={selected_data}
    xRange={xRange}
    yRange={yRange}
/>
<Footer />

<style>
</style>