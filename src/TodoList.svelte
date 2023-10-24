<script>
  import TodoItem from './TodoItem.svelte';
  import {_} from 'svelte-i18n';  

  let todo = '';
  let todoList = [];

  const addTodo = () => {
    if (todo) {
      todoList = [...todoList, todo];  // мутирующие методы не сработают
      todo = '';
    }
  };

  const handleClick = (event) => {
    if (event.code === 'Enter') addTodo();
  };

  const deleteHandler = ({ detail }) => {
    todoList = todoList.filter((_, index) => index !== detail);
  };

  $: total = todoList.length;
</script>

<div class="container">
  <label for="input">{$_('add_todo')}</label>
  <div class="input-wrapper">
    <input on:keydown={handleClick} bind:value={todo} id="input" type="text" placeholder={$_('placeholder')}>
    <button on:click={addTodo}>{$_('add_btn')}</button>
  </div>

  {#each todoList as todo, index}
    <TodoItem todo={todo} index={index} on:delete={deleteHandler} />
  {/each}

  <span class="total">{$_('total', {values: {total}})}</span>
</div>

<style>
.container {
  width: 500px;
  height: 60vh;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  position:relative;
  background-color: lemonchiffon;
}

.input-wrapper {
  display: flex;
}

.total {
  position: absolute;
  bottom: 0;
}
</style>
