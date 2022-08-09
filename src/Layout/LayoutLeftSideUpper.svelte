<script>
	import Screen from './../Components/Screen.svelte';
    import CURSOR_ICON from "../assets/Icon/right-arrow.svg";
    import Icon from "@iconify/svelte";
</script>

<div class="w-full h-full flex">
    <div class="bg-theme-600 h-full w-fit p-2 border-r-[5px] border-black">
        <div class="flex flex-col gap-y-2 items-center">
            <div class="w-10 h-10 border-2 bg-theme-900 border-theme-600 flex justify-center items-center rounded-lg">
                <Icon class="text-2xl text-selected " icon="fluent:cursor-24-filled" />
            </div>
        </div>
    </div>

    <div class="flex-auto h-full ">
        <Screen />
    </div>
</div>
