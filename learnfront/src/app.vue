
<template>
  <main class="container">
    <h1 class="title">Ostunimekiri / ToDo</h1>

    <form class="add-form" @submit.prevent="addItem">
      <input
        v-model="newText"
        class="input"
        placeholder="Lisa uus asi..."
      />

      <div class="select">
        <select v-model.number="newImportance">
          <option :value="1">1 – Madal</option>
          <option :value="2">2 – Keskmine</option>
          <option :value="3">3 – Kõrge</option>
        </select>
      </div>

      <button type="submit" class="button is-primary">
        Lisa
      </button>
    </form>

    <ItemList
      title="All items"
      :items="items"
      @toggle="toggleDone"
      @remove="removeItem"
      @set-importance="setImportance"
    />

    <ItemList
      title="Done items"
      :items="doneItems"
      @toggle="toggleDone"
      @remove="removeItem"
      @set-importance="setImportance"
    />

    <ItemList
      title="ToDo items"
      :items="todoItems"
      @toggle="toggleDone"
      @remove="removeItem"
      @set-importance="setImportance"
    />
  </main>
</template>



<script>
import ItemList from './ItemList.vue';

export default {
  name: 'App',
  components: { ItemList },
  data() {
    return {
      nextId: 4,
      newText: '',
      newImportance: 2,
      items: [
        { id: 1, text: 'Piim', isDone: false, importance: 3 },
        { id: 2, text: 'Leib', isDone: true, importance: 1 },
        { id: 3, text: 'Munad', isDone: false, importance: 2 }
      ]
    };
  },
  computed: {
    doneItems() {
      return this.items.filter(i => i.isDone);
    },
    todoItems() {
      return this.items.filter(i => !i.isDone);
    }
  },
  methods: {
    addItem() {
      const text = this.newText.trim();
      if (!text) return;

      this.items.push({
        id: this.nextId++,
        text,
        isDone: false,
        importance: this.newImportance
      });

      this.newText = '';
      this.newImportance = 2;
    },
    toggleDone(id) {
      const item = this.items.find(i => i.id === id);
      if (item) item.isDone = !item.isDone;
    },
    removeItem(id) {
      this.items = this.items.filter(i => i.id !== id);
    },
    setImportance(id, level) {
      const item = this.items.find(i => i.id === id);
      if (item) item.importance = level;
    }
  }
};
</script>

