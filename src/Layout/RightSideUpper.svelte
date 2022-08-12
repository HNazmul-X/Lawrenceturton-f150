<script>
    import ColorControlPanel from "./../Components/ColorControlPanel.svelte";
    import SettingControlPanel from "./../Components/SettingControlPanel.svelte";
    import TabControlPanel from "./../Components/TabControlPanel.svelte";

    import Icon from "@iconify/svelte";
</script>

<div class="w-full min-h-full overscroll-y-auto">
    <div class="w-full min-h-full">
        <TabControlPanel />
        <!-- controls -->
        <SettingControlPanel />

        <!-- Controls 2 -->
        <ColorControlPanel />

        <p class="py-8"></p>
    </div>
</div>
