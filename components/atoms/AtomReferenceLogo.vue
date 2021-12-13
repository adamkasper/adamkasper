<template>
  <a :href="reference.link" target="_blank" class="group">
    <component
      :is="reference.logo + '-logo'"
      class="w-full h-auto fill-current text-gray-400 group-hover:text-gray-300"
    />
  </a>
</template>

<script>
import BezpecnyRadonLogo from '~/assets/images/logos/bezpecnyradon.svg?inline'
import CfgLogo from '~/assets/images/logos/cfg.svg?inline'
import CrowningArtsLogo from '~/assets/images/logos/crowningarts.svg?inline'
import DamiDevLogo from '~/assets/images/logos/dami.svg?inline'
import HanabosoLogo from '~/assets/images/logos/hanaboso.svg?inline'
import HotelPatriaLogo from '~/assets/images/logos/hotelpatria.svg?inline'
import InteeLogo from '~/assets/images/logos/intee.svg?inline'
import MasinuvStatekLogo from '~/assets/images/logos/masinuvstatek.svg?inline'
import ObvioLogo from '~/assets/images/logos/obvio.svg?inline'
import PlenkyLevneLogo from '~/assets/images/logos/plenkylevne.svg?inline'
import SaboItLogo from '~/assets/images/logos/saboit.svg?inline'
import TwentioLogo from '~/assets/images/logos/twentio.svg?inline'
import WpjLogo from '~/assets/images/logos/wpj.svg?inline'

export default {
  components: {
    BezpecnyRadonLogo,
    CfgLogo,
    CrowningArtsLogo,
    DamiDevLogo,
    HanabosoLogo,
    HotelPatriaLogo,
    InteeLogo,
    MasinuvStatekLogo,
    ObvioLogo,
    PlenkyLevneLogo,
    SaboItLogo,
    TwentioLogo,
    WpjLogo,
  },
  props: {
    reference: { type: Object, required: true },
  },
}
</script>
