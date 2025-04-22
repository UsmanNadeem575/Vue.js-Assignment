<template>
    <div id="ActivityLists" class="bg-light py-5 min-vh-100">
      <b-container>
        <b-row class="my-3">
            <b-col lg="4">
                <button variant="danger" class="btn btn-danger rounded-0" @click="clearStorage()">
                    Delete Local Storage
                </button>
            </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col lg="3">
            <b-form @submit.prevent class="d-flex justify-content-center">
              <b-input v-model="inputActivity" placeholder="Enter Your Activity" class="shadow-sm rounded-0" size="md"></b-input>
              <button variant="success" class="btn btn-success rounded-0" @click="isUpdating ? confirmUpdate() : addActivity()" >
                {{ isUpdating ? 'Update' : 'Add' }}
              </button>
              
            </b-form>
            <b-alert v-if="showAlert" :variant="alertVariant" show class="mt-3 py-2 text-capitalize">
                {{ statusMessage }}
            </b-alert>
          </b-col>
        </b-row>
  
        <b-row>
            <b-col lg="5">
                <h4 class="text-dark" v-if="activities.length > 0">Your Activities</h4>

                <div v-for="(activity, index) in activities" :key="index" class="activity-card mb-3 p-3 shadow-sm rounded bg-white d-flex justify-content-between align-items-center">
                    <h5 class="mb-1" :class="{ activities: isCompleted[index] }">{{ activity }}</h5>
                    <div>
                        <b-button variant="primary" size="sm" class="ml-2" @click="updateActivity(index)" :disabled="isCompleted[index]">Update</b-button>
                        <b-button variant="danger" size="sm" class="ml-2 mx-3" @click="deleteActivity(index)" :disabled="isCompleted[index]">Delete</b-button>
                        <b-button :variant="isCompleted[index] ? 'warning' : 'success'" size="sm" class="ml-2" @click="toggleComplete(index)"> {{ isCompleted[index] ? 'Mark Incomplete' : 'Complete' }} </b-button>
                    </div>
                </div>
            </b-col>
        </b-row>
      </b-container>
    </div>
  </template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      inputActivity: '',
      isUpdating: false,
      updateIndex: null,
      showAlert: false,
      statusMessage: '',
      alertVariant: '',
    }
  },

  computed: {
    ...mapGetters(['allActivities', 'completedStatus']),
    activities() {
      return this.allActivities
    },
    isCompleted() {
      return this.completedStatus
    }
  },

  methods: {
    ...mapMutations([
      'ADD_ACTIVITY', 
      'DELETE_ACTIVITY',
      'UPDATE_ACTIVITY',
      'TOGGLE_COMPLETE',
      'CLEAR_ALL'
    ]),

    addActivity() {
      if (!this.inputActivity.trim()) return
      this.ADD_ACTIVITY(this.inputActivity)
      this.inputActivity = ''
      this.showFeedback('Activity added' , 'success')
    },

    updateActivity(index) {
      this.inputActivity = this.activities[index]
      this.updateIndex = index
      this.isUpdating = true
    },

    confirmUpdate() {
      if (!this.inputActivity.trim()) return
      this.UPDATE_ACTIVITY({ index: this.updateIndex, newValue: this.inputActivity })
      this.inputActivity = ''
      this.isUpdating = false
      this.showFeedback('Activity updated' , 'primary')
    },

    deleteActivity(index) {
      this.DELETE_ACTIVITY(index)
      this.showFeedback('Activity deleted', 'danger')
    },

    toggleComplete(index) {
      this.TOGGLE_COMPLETE(index)
    },

    showFeedback(message, variant) {
      this.statusMessage = message
      this.alertVariant = variant
      this.showAlert = true
      setTimeout(() => (this.showAlert = false), 2000)
    },

    clearStorage() {
        this.CLEAR_ALL()
    }
  },

  mounted() {
    this.$store.dispatch('loadActivities')
  }
}
</script>

<style scoped>

#ActivityLists {
  background: #f4f6f9;
}

.activities {
  opacity: 0.5;
}

</style>