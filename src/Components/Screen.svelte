<script>
    import SCREEN_IMAGE from "../assets/screen-image.png";
    import HONEUCOMB_EXAMPLE from "../assets/Icon/honeucomb-example.png";
    import Icon from "@iconify/svelte";
</script>

<div class="w-full h-full  relative">
    <div class="flex h-full w-full justify-center items-center">
        <div class="w-[85%] h-[90%] ">
            <img src="{SCREEN_IMAGE}" class="w-full h-full" alt="" />
        </div>
    </div>

    <div class="w-[250px] xxl:w-[350px] absolute h-full top-0 right-0 bg-neutral-900 bg-opacity-70 filter backdrop-blur-[36px] ">
        <div class="w-full h-full flex flex-col">
            <div class="p-3">
                <div class="flex bg-theme-900 p-1 rounded items-center gap-1 focus:ring-1 ring-white" tabindex="0">
                    <Icon icon="la:search" />
                    <input type="text" class="text-white bg-transparent flex-auto focus:outline-none focus:ring-0 text-sm align-middle" placeholder="Search here" />
                </div>
            </div>
            <div class="p-3 w-full h-full">
                <div class="w-full h-full overflow-y-scroll scrollbar-thin">
                    <div class="w-full bg-neutral-900 bg-opacity-80 py-3 p-2">
                        <h5>Styleize</h5>
                        <div class="flex pt-2 flex-wrap">
                            <div class="w-1/4 p-1">
                                <img src="{HONEUCOMB_EXAMPLE}" class="w-full" alt="" />
                                <p class="text-[8px]">honeucomb</p>
                            </div>
                            <div class="w-1/4 p-1">
                                <img src="{HONEUCOMB_EXAMPLE}" class="w-full" alt="" />
                                <p class="text-[8px]">honeucomb</p>
                            </div>
                            <div class="w-1/4 p-1">
                                <img src="{HONEUCOMB_EXAMPLE}" class="w-full" alt="" />
                                <p class="text-[8px]">honeucomb</p>
                            </div>
                            <div class="w-1/4 p-1">
                                <img src="{HONEUCOMB_EXAMPLE}" class="w-full" alt="" />
                                <p class="text-[8px]">honeucomb</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
