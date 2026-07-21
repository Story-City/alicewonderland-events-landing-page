<script lang="ts">
  import clock from './clock.gif'

  let { startDate }: { startDate: string } = $props()
  let days = $derived(() => {
    const now = new Date()
    const diff = new Date(startDate).getTime() - now.getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  })
</script>

{#if days() > 0}
  <div class="bg-[#FFF3DD] px-6 py-2 sm:pl-16 mt-8 mb-10 lg:mt-0 rounded-xl relative w-fit mx-auto flex">
    <img
      src={clock.src}
      alt="clock"
      height={80}
      width={80}
      class="sm:absolute rounded-full top-1/2 -left-7.5 sm:translate-y-[-50%] mr-4"
    />
    <div>
      <div class="text-2xl font-kyivtype font-bold text-balance">
        Only {days()} day{days() === 1 ? '' : 's'} left until the event
      </div>
    </div>
  </div>
{/if}
