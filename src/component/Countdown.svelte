<script>
  import clock from './clock.gif'
  import { onMount } from 'svelte'

  let days = $state(12)
  let loaded = $state(false)

  onMount(() => {
    // Check for the value in localStorage
    const value = localStorage.getItem('earlyBirdTicketsLeft')
    if (value) {
      days = parseInt(value)
    }
    const newDays = days - 1 > 0 ? days - 1 : 12
    localStorage.setItem('earlyBirdTicketsLeft', newDays.toString())
    loaded = true
  })
</script>

{#if loaded}
  <div class="bg-[#FFF3DD] px-6 py-2 sm:pl-16 mt-8 lg:mt-0 rounded-xl relative w-fit mx-auto flex">
    <img
      src={clock.src}
      alt="clock"
      height={80}
      width={80}
      class="sm:absolute rounded-full top-1/2 left-[-30px] sm:translate-y-[-50%] mr-4"
    />
    <div>
      <div class="text-2xl font-kyivtype font-bold text-balance">Only {days} early bird tickets left</div>
      <div class="bg-[#B2DDFA] w-full h-4 rounded-full mt-2">
        <div class="bg-[#63B0E4] h-full rounded-full" style="width: {(days / 40) * 100}%"></div>
      </div>
    </div>
  </div>
{/if}
