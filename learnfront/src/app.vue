<template>
  <div id="app">
    <h1>Ostunimekiri / ToDo</h1>

    <div class="add-form">
      <input
        v-model="newText"
        @keyup.enter="addItem"
        placeholder="Lisa uus asi..."
      />
      <select v-model.number="newImportance">
        <option :value="1">1 – Madal</option>
        <option :value="2">2 – Keskmine</option>
        <option :value="3">3 – Kõrge</option>
      </select>
      <button @click="addItem">Lisa</button>
    </div>

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
  </div>
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

<style>
/* Võid jätta oma style.scss'i või lisada siia */
#app {
  max-width: 600px;
  margin: 2rem auto;
  font-family: system-ui, sans-serif;
}

.add-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.add-form input {
  flex: 1;
  padding: 0.5rem;
}

.add-form select,
.add-form button {
  padding: 0.5rem 0.8rem;
}
</style>