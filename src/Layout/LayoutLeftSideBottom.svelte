<script>
    import BottomGraphPanel from "./../Components/BottomGraphPanel.svelte";
    import BottomControlPanel from "../Components/BottomControlPanel.svelte";
    import BottomSearchPanel from "../Components/BottomSearchPanel.svelte";
</script>

<main class="w-full pt-1 h-full overflow-hidden flex gap-[5px] bg-[#131313]">
    <!-- you can edit the height and width according to your need by changing the width percentage below of every section ⬇ -->

    <!-- left bottom sidebar -->
    <div class="h-full bg-[#232323] py-1 w-[20%] min-w-[200px]">
        <div>
            <!-- Search -->
            <BottomSearchPanel />
        </div>
    </div>
    <!-- graph -->
    <div class="bg-[#232323] w-[25%]">
        <BottomGraphPanel />
    </div>
    <!-- controls -->
    <BottomControlPanel />
</main>
