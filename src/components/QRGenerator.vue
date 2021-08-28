<template>
  <QRcodeVue :value="hash" :size="250" level="H" renderAs="svg" />
</template>

<script>
import QRcodeVue from 'qrcode.vue';

export default {
  name: 'QRGenerator',
  props: {
    hash: String
  },
  components: {
    QRcodeVue
  }
};
</script>

<style>
</style>