<template>
  <ul class="tabs">
    <li v-for="tab in tabs" v-bind:class="{active: tab === selectedTab}"
    v-on:click="onClickTab(tab)">
      {{tab}}
    </li>
  </ul>  
</template>

<script>
export default {
  props: ['tabs', 'selectedTab'],
  methods: {
    onClickTab(tab) {
      this.$emit('@change', tab)
    }
  }
}
</script>
