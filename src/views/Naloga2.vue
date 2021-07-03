<template>
  <div class="flex flex-col items-center gap-8 px-5">
    <div class="text-3xl font-bold">Naloga 2</div>
    <p class="font-medium">Izberite težavnost</p>
    <SwitchGroup>
      <div class="flex items-center">
        <SwitchLabel class="mr-10" passive>{{answer ? 'Lahko' : 'Težko' }}</SwitchLabel>
        <Switch v-model="answer" :class="answer ? 'bg-green-500' : 'bg-red-700'" class="relative inline-flex items-center h-6 rounded-full w-11">
          <span :class="answer ? 'translate-x-6' : 'translate-x-1'" class="inline-block w-4 h-4 transform bg-white rounded-full" />
        </Switch>
      </div>
    </SwitchGroup>
    <button class="btn btn-blue flex-none w-40 self-end" @click="test()">Nadaljuj</button>
  </div>
</template>

<script>
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

export default {
  components: {
    Switch, SwitchGroup, SwitchLabel
  },
  data () {
    return {
      answer: true
    }
  },
  methods: {
    test() {
        if(this.answer) {
          this.$router.push('/L')
        } else {
          this.$router.push('/T')
        }
    }
  }
}
</script>

