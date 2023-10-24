<script>
  import {createEventDispatcher} from 'svelte';

  export let todo;
  export let index;

  const dispatch = createEventDispatcher();
  const deleteHandler = () => {
    dispatch('delete', index);
  };
</script>

<div class="wrapper">
  {index + 1}: {todo}
  <span on:click={deleteHandler} class="delete-button">delete</span>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: 1px dashed #ccc;
    border-radius: 8px;
    margin-bottom: 8px;
    padding: 8px;
    background-color: white;
  }

  .delete-button {
    color: orangered;
    cursor: pointer;
    opacity: .6;
  }
</style>
