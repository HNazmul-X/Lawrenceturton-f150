<script>
    import LayoutLeftSideUpper from "./LayoutLeftSideUpper.svelte";
    import Titlebar from "../Components/Titlebar.svelte";
    import RightSidebar from "./LayoutRightSidebar.svelte";
    import LayoutLeftSideBottom from "./LayoutLeftSideBottom.svelte";
</script>

<main class="w-full h-screen  border-black flex flex-wrap">
    <!-- title bar -->
    <!-- <div class="w-full  layout title">
        <Titlebar />
    </div> -->

    <!-- Left Side -->
    <div class="w-[80%]  layout left">
        <div class="w-full h-full  flex flex-col">
            <div class="h-[65%] w-full border-2 border-black bg-theme-400">
                <LayoutLeftSideUpper />
            </div>
            <div class="h-[35%] w-full  border-2 border-black">
                <LayoutLeftSideBottom />
            </div>
        </div>
    </div>

    <!-- Righ pannel Side -->
    <div class="w-[20%]  layout right">
        <RightSidebar />
    </div>
</main>
