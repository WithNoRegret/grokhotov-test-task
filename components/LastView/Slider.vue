<template>
  <swiper :modules="modules" :slides-per-view="4" :space-between="20" navigation>
    <swiper-slide>
      <LastViewItem :name="'Мишка 1'" />
    </swiper-slide>
    <swiper-slide>
      <LastViewItem :name="'Мишка 2'" />
    </swiper-slide>
    <swiper-slide>
      <LastViewItem :name="'Мишка 3'" />
    </swiper-slide>
    <swiper-slide>
      <LastViewItem :name="'Мишка 4'" />
    </swiper-slide>
    <swiper-slide>
      <LastViewItem :name="'Мишка 5'" />
    </swiper-slide>
    <swiper-slide>
      <LastViewItem :name="'Мишка 6'" />
    </swiper-slide>
    <swiper-slide>
      <LastViewItem :name="'Мишка 7'" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss" scoped></style>