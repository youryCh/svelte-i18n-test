<script>
	import TodoList from './TodoList.svelte';
  import {_} from 'svelte-i18n'; 

	export let name;
</script>

<main>
	<h2 class="hello">{$_('hello', {values: {name}})}</h2>
	<TodoList />
</main>

<style>
	main {
		/* text-align: center; */
		padding: 1em;
		max-width: 240px;
		/* margin: 0 auto; */
		display: flex;
    flex-direction: column;
		align-items: center;
	}

	.hello {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>