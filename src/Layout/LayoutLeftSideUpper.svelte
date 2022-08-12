<script>
    import Iconbar from "./../Components/Iconbar.svelte";
    import Screen from "./../Components/Screen.svelte";
</script>

<div class="w-full h-full flex">
    <div class="bg-theme-600 h-full w-fit p-2 border-r-[5px] border-black">
        <div class="flex flex-col gap-y-2 items-center">
            <Iconbar />
        </div>
    </div>

    <div class="flex-auto h-full ">
        <Screen />
    </div>
</div>
