<script lang="ts">
    import Button from "$lib/widgets/Button.svelte";
</script>

<div class="flex flex-col bg-green h-screen font-medium text-4xl">
    <div class="flex flex-col h-22">
        <span class="uppercase text-black h-auto inline-flex items-center">Sur</span>
        <span class="uppercase text-black h-auto inline-flex items-center">vey.</span>
    </div>
    <div class="flex flex-grow justify-center items-center h-max">
        <p>Create your <strong>first survey</strong></p>
    </div>
    <Button text="Create" />
</div>