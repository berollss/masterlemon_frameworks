<template>
  <v-container>
    <v-layout column>
      <v-flex xs12>
        <h2>Member Page</h2>
      </v-flex>
      <v-layout row>
        <v-flex xs6>
          <v-text-field v-model="organizationName" />
        </v-flex>
        <v-flex xs6>
          <v-btn @click="loadMembers"> Load </v-btn>
        </v-flex>
      </v-layout>
      <table :class="$style.table">
        <thead>
          <member-head />
        </thead>
        <tbody>
          <template v-for="member in members">
            <member-row :key="member.id" :member="member" />
          </template>
        </tbody>
      </table>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberHead, MemberRow },
  data: () => ({
    members: [] as Member[],
    organizationName: "lemoncode" as string,
  }),
  methods: {
    loadMembers: function() {
      getAllMembers(this.organizationName).then(members => {
        this.members = members;
      });
    },
  },
});
</script>

<style module>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
