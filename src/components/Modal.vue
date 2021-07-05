<template>
  <button type="button" @click="openModal" class="w-40 px-4 py-2 text-sm font-medium text-white bg-black rounded-md border border-blue-500 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
    <FolderIcon v-if="!isOpen && !hack" :class="isCompleted ? 'text-green-500' : 'text-blue-500'" class="h-20 w-24 mx-auto" />

    <FolderOpenIcon v-if="isOpen && !hack" :class="isCompleted ? 'text-green-500' : 'text-blue-500'" class="h-20 w-24 mx-auto" />
    <CollectionIcon v-if="hack" class="h-20 w-24 text-red-500 mx-auto" />
    <slot name="title"></slot>
  </button>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild as="template"
            enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
            leave="duration-200 ease-in" leave-from="opacity-300" leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
          <div class="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
              <slot name="title"></slot>
            </DialogTitle>

            <div class="mt-2">
              <p class="text-sm text-gray-500">
                <slot></slot>
              </p>
            </div>

            <div v-if="hack" class="mt-2">
              <p class="text-sm text-red-500">
                <slot name="secret"></slot>
              </p>
            </div>

            <input class="mt-4 block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500" v-model="input" :class="error ? 'bg-red-400' : ''" :disabled="isCompleted" @focus="error=false" />

            <div class="mt-4 flex justify-between">
              <button type="button" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" @click="closeModal">Zapri</button>
              <button v-if="!isCompleted" type="button" class="self-end inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500" @click="check">Preveri</button>
            </div>
          </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { FolderIcon, FolderOpenIcon, CollectionIcon  } from '@heroicons/vue/solid'

export default {
  name: 'Modal',
  components: {
    Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot, FolderIcon, FolderOpenIcon, CollectionIcon
  },
  data () {
    return {
      isOpen: false,
      error: false,
      isCompleted: false,
      input: ''
    }
  },
  props: {
    answer: {
      type: String,
      required: true
    },
    hack: Boolean
  },
  methods: {
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    },
    check() {
      this.error = false
      if(this.input.toUpperCase() === this.answer || this.answer === '') {
        this.isCompleted = true
        this.$emit('solved')
      } else {
        this.error = true
      }
    }
  },
  emits: ['solved']
}
</script>
