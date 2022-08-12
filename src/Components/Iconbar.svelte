<script>
    import Icon from "@iconify/svelte";
    import CIRCLE_IMAGE from "../assets/Icon/circle-two-tone.svg";

    const iconData = [
        { iconName: "fluent:cursor-24-filled", isActive: true, iconType: "text" },
        { iconName: "bxs:pen", isActive: false, iconType: "text" },
        { iconName: "cil:text", isActive: false, iconType: "text" },
        { iconName: "bxs:hand", isActive: false, iconType: "text" },
        { iconName: "icon-park-twotone:triangle", isActive: false, iconType: "text" },
        { iconName: "icon-park-twotone:rectangle-one", isActive: false, iconType: "text" },
        { iconName: CIRCLE_IMAGE, isActive: false, iconType: "img" },
    ];
</script>

{#each iconData as icon}
    <div class="w-10 h-10 border-2 cursor-pointer  {icon.isActive ? 'bg-theme-900' : 'hover:bg-theme-900'}  border-theme-600 flex justify-center items-center rounded-lg">
        {#if icon.iconType == "text"}
            <Icon class="text-2xl  {icon.isActive ? 'text-selected' : 'hover:text-white'}" icon="{icon.iconName}" />
        {:else if icon.iconType === "img"}
            <img class="h-6 w-6" src="{icon.iconName}" alt="" />
        {/if}
    </div>
{/each}
