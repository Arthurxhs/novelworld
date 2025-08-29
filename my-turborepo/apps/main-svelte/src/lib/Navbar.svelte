<script lang="ts">

    let numero = 0

    function addOne() {
        numero +=1
    }

</script>

<button on:click={addOne}>
    oprime {numero} aqui
</button>

<style lang="scss">

</style>
