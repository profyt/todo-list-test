<template>
<div class="modal fade" :class="classObject" :style="syleObject" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Читай внимательно</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {{popupMessage}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeModal();$router.push({name: 'main'}) " v-if='typeMessage==="complete"'>Здорово</button>
        <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {eventBus} from '@/main'

export default Vue.extend({
    name: 'popup',
    data(){
        return {
            popupMessage:{
                type: Text
            },
            typeMessage:{
              type: Text
            },
            classObject:{
              show: false
            },
            syleObject:{
              display: 'none'
            }
        }
    },
    created(){
        eventBus.$on('popupOpen', (data:any) =>{
            this.popupMessage = data.message.value
            this.typeMessage = data.typeMessage.value
            this.classObject.show = true
            this.syleObject.display = 'block'
        } )
    },
    methods:{
      closeModal(){
        this.classObject.show = false
        this.syleObject.display = ''
      }
    }

})
</script>
