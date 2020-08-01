<template>
  <v-app>
    <v-content>
      <member-table />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { MemberTable } from "./components";

export default Vue.extend({
  name: "App",
  components: { MemberTable },
});
</script>
