<script>
    import RightSideUpper from "./../Components/RightSideUpper.svelte";
    import LayoutLeftSideBottom from "./LayoutLeftSideBottom.svelte";
    import LayoutRightSidebarBottom from "./LayoutRightSidebarBottom.svelte";
</script>

<div class="w-full h-full flex flex-col">
    <!-- Upper Part -->
    <div class="upper-part h-[65%] border-2 border-black scrollbar-thin overflow-y-auto">
        <RightSideUpper />
    </div>
    <div class="down-part h-[35%] border-2 border-black ">
        <LayoutRightSidebarBottom/>
    </div>
</div>
