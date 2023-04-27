<script>
    export let selected_year;

    const options = [2012, 2022];
</script>

<form>
    {#each options as option}
        <div class="option">
            <label for="year_{option}">{option}</label>
            <input
                type="radio"
                id="year_{option}"
                value={option}
                on:change={() => selected_year = option}
                checked={selected_year === option}
            />
        </div>
    {/each}
</form>

<style>
    form {
        display: flex;
        gap: 1rem;
        margin: 1rem 0;
    }
</style>
