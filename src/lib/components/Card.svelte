<script lang="ts">
	export let classification: string;
	export let bg_color: string = '';
	export let emoji: string = '';
</script>

<div
	class="{bg_color
		? bg_color
		: ''} py-1 px-2 w-full h-full flex justify-center font-semibold items-center shadow-md rounded-md drop-shadow-md"
>
	{classification}<span class="flex text-2xl sm:text-4xl drop-shadow-xl">{emoji ? emoji : ''}</span>
</div>
