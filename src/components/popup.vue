<template>
<div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {{popupMessage}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import eventBus from '@/main'

export default Vue.extend({
    name: 'popup',
    data(){
        return {
            popupMessage:{
                type: Text,
                default: ''
            }
        }
    },
    created(){
        eventBus.$on('popupOpen', data =>{
            this.popupMessage = data.message
        } )
    }

})
</script>
