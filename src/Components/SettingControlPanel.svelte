<script>
  import TabControlPanel from './TabControlPanel.svelte';

    import Icon from "@iconify/svelte";
</script>

<div class="px-4 bg-[#313131]">
            <div class="pt-4 flex items-center justify-between">
                <h2 class="text-white text-[12px]">Video</h2>
                <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="12.278" height="9" viewBox="0 0 12.278 9">
                    <g id="Group_23" data-name="Group 23" transform="translate(-1200.339 -139.5)">
                        <path id="Path_68" data-name="Path 68" d="M1200.339,140h12.278" fill="none" stroke="#fff" stroke-width="1" opacity="0.8"></path>
                        <path id="Path_69" data-name="Path 69" d="M1200.339,140h12.278" transform="translate(0 4)" fill="none" stroke="#fff" stroke-width="1" opacity="0.8"></path>
                        <path id="Path_70" data-name="Path 70" d="M1200.339,140h12.278" transform="translate(0 8)" fill="none" stroke="#fff" stroke-width="1" opacity="0.8"></path>
                    </g>
                </svg>
            </div>
            <!-- options -->
            <div class="mt-[1rem] flex flex-col gap-[10px] items-center pb-[1rem]">
                <div class="flex items-center gap-[10px]">
                    <p class="text-[11px] text-white">Scale</p>
                    <input class="c-slider h-[3px] bg-[#161616]" type="range" value="124" max="300" />
                    <input class="px-2 w-[45px] text-[11px] bg-[#161616] text-white" type="text" value="124%" disabled />
                </div>

                <div>
                    <div class="flex items-center gap-[10px] mb-2">
                        <p class="text-[11px] text-white">Position</p>
                        <input class="px-2 w-[130px] h-[22px] text-[11px] bg-[#161616] text-white" type="text" value="0" />
                        <input class="px-2 w-[45px] h-[22px] text-[11px] bg-[#161616] text-white" type="text" value="-447" disabled />
                    </div>
                    <div class="-ml-3 flex items-center gap-[10px] mb-2">
                        <p class="text-[11px] text-white">X Rotation</p>
                        <input class="px-2 w-[130px] h-[22px] text-[11px] bg-[#161616] text-white" type="text" value="0" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="Group_19" data-name="Group 19" transform="translate(-1245 -195)">
                                <rect id="Rectangle_50" data-name="Rectangle 50" width="16" height="16" rx="8" transform="translate(1245 195)" fill="#c1c1c1"></rect>
                                <rect id="Rectangle_51" data-name="Rectangle 51" width="4" height="4" rx="2" transform="translate(1251 205)" fill="#161616"></rect>
                            </g>
                        </svg>
                    </div>
                    <div class="-ml-3 flex items-center gap-[10px]">
                        <p class="text-[11px] text-white">Y Rotation</p>
                        <input class="px-2 w-[130px] h-[22px] text-[11px] bg-[#161616] text-white" type="text" value="0" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="Group_19" data-name="Group 19" transform="translate(-1245 -195)">
                                <rect id="Rectangle_50" data-name="Rectangle 50" width="16" height="16" rx="8" transform="translate(1245 195)" fill="#c1c1c1"></rect>
                                <rect id="Rectangle_51" data-name="Rectangle 51" width="4" height="4" rx="2" transform="translate(1251 205)" fill="#161616"></rect>
                            </g>
                        </svg>
                    </div>
                </div>

                <div class="-ml-3 flex items-center gap-[10px]">
                    <p class="text-[11px] text-white">Opacity</p>
                    <input class="c-slider h-[3px] bg-[#161616]" type="range" value="50" max="100" />
                    <input class="px-2 w-[45px] text-[11px] bg-[#161616] text-white" type="text" value="50%" disabled />
                </div>
            </div>

            <!-- Tabs -->
            <div class="mt-5 mb-2">
                <div class="py-3 border-t-2 border-black">
                    <h1 class="text-[12px] text-white">Cropping</h1>
                </div>

                <div class="py-3 border-t-2 border-black">
                    <h1 class="text-[12px] text-white">Color Controls</h1>
                </div>

                <div class="py-3 border-t-2 border-black">
                    <h1 class="text-[12px] text-white">Video Filters</h1>
                </div>
            </div>
        </div>

