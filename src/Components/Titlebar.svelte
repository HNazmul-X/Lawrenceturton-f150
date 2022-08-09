<script>
    const staticData = [
        {
            text: "Artboard",
            link: "/",
        },
        {
            text: "Artflow",
            link: "/",
        },
        {
            text: "Director",
            link: "/",
        },
        {
            text: "Hotkeys",
            link: "/",
        },
        {
            text: "HotKeys",
            link: "/",
        },
        {
            text: "Bounty",
            link: "/",
        },
        {
            text: "Docs",
            link: "/",
        },
        {
            text: "Volenter",
            link: "/",
        },
        {
            text: "Admin",
            link: "/",
        },
    ];
</script>

<div class="w-full">
    <ul class="flex px-2">
        {#each staticData as d}
            <li><a href="/" class="inline-block  px-2 text-theme-100 ">{d.text}</a></li>
        {/each}
    </ul>
</div>
