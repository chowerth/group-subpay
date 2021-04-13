<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page>
    <div class="row q-pa-md">
      <div class="col-xs-12 col-sm-4 q-pa-md">
        <q-card class="text-center q-pa-md myCard">
          <q-img ratio=".9" alt="Quasar logo" src="~assets/quasar-logo.svg" />
          <q-card-section class="q-pt-md">
            <div class="text-h3">Quasar Framework</div>
            <div class="text-body1">The Best Vue Framework</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-4 q-pa-md myCard">
        <q-card class="text-center q-pa-md myCard">
          <q-img ratio=".9" alt="Amplify logo" src="~assets/amplify-logo.svg" />
          <q-card-section class="q-pt-md">
            <div class="text-h3">AWS Amplify Framework</div>
            <div class="text-body1">Serverless Cloud First Apps</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-4 q-pa-md">
        <q-card class="text-center q-pa-md myCard">
          <q-img
            ratio=".9"
            alt="Amplify logo"
            src="~assets/group-subpay-shudder-logo.png"
          />
          <q-card-section class="q-pt-md">
            <div class="text-h3">Group Subpay Shudder</div>
            <div class="text-body1">
              Nationwide Hackathon Team
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- <q-img
      :src="~"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />     -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex"
});
</script>
