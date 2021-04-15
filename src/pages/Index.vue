<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page>
    <div class="row q-pa-md">
      <q-card class="col-xs-12 col-md-4 myCard">
        <q-card-section>
          <q-img
            height="400px"
            fit="contain"
            alt="Quasar logo"
            src="~assets/quasar-logo.svg"
          />
        </q-card-section>
        <q-card-section class="text-center">
          <div class="text-h3 ellipsis-2-lines">Quasar Framework</div>
          <div class="text-body1 ellipsis">The Best Vue Framework</div>
        </q-card-section>
      </q-card>
      <q-card class="col-xs-12 col-md-4 myCard">
        <q-card-section>
          <q-img
            height="400px"
            fit="contain"
            alt="Amplify logo"
            src="~assets/amplify-logo.svg"
          />
        </q-card-section>
        <q-card-section class="text-center">
          <div class="text-h3 ellipsis-2-lines">AWS Amplify Framework</div>
          <div class="text-body1 ellipsis">Serverless Cloud First Apps</div>
        </q-card-section>
      </q-card>
      <q-card class="col-xs-12 col-md-4 myCard">
        <q-card-section>
          <q-img
            height="400px"
            fit="contain"
            alt="Amplify logo"
            src="~assets/group-subpay-shudder-logo.png"
          />
        </q-card-section>
        <q-card-section class="text-center">
          <div class="text-h3 ellipsis-2-lines">Group Subpay Shudder</div>
          <div class="text-body1 ellipsis">
            Nationwide Hackathon Team
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex"
});
</script>
