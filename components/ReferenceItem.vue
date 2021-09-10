<template>
  <a :href="reference.link" target="_blank" class="group">
    <component
      :is="reference.logo + '-logo'"
      class="
        w-10/12
        xs:w-3/4
        h-auto
        fill-current
        text-gray-300
        group-hover:text-gray-800
      "
    />
  </a>
</template>

<script>
import DamiDevLogo from '~/assets/images/logos/dami.svg?inline'
import HanabosoLogo from '~/assets/images/logos/hanaboso.svg?inline'
import InteeLogo from '~/assets/images/logos/intee.svg?inline'
import MountfieldLogo from '~/assets/images/logos/mountfield.svg?inline'
import SaboItLogo from '~/assets/images/logos/saboit.svg?inline'
import TwentioLogo from '~/assets/images/logos/twentio.svg?inline'
import WpjLogo from '~/assets/images/logos/wpj.svg?inline'

export default {
  components: {
    DamiDevLogo,
    HanabosoLogo,
    InteeLogo,
    MountfieldLogo,
    SaboItLogo,
    TwentioLogo,
    WpjLogo,
  },
  props: {
    reference: { type: Object, required: true },
  },
}
</script>
