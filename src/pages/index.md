---
title: Magenta UI
meta:
  - name: home
    content: magenta ui installation
---

<script setup>
import {
  Code,
  Heading,
  Icon,
  Spacer,
  Text,
  Link,
  Button,
} from '@magenta-ui/vue'
import View from '../components/View.vue'
</script>

<View :sidebar="false" class="index-view">
  <template #logo>
    <Link to="/funding" target="_blank">
      <Button secondary label="Be a Sponsor 🚀" />
    </Link>
  </template>

  <div class="hero-intro">
  <img src="../assets/images/logo-shape.svg"/>  
  <Spacer size="sm" />

  <Heading size="lg" class="logo-name" subtitle>
    Introducing <span>Magenta UI</span>.
  </Heading>

  <Spacer size="lg" />

  <Heading size="lg" class="text-hero">
    A simple, beautiful and<br /> powerful component library<br /> for Vue apps.
  </Heading>

  <Spacer size="lg" />

  <Link to="/docs">
    <Button size="lg" label="Documentation" />
  </Link>
  &nbsp;
  &nbsp;
  <Link to="/docs/components" target="_blank">
    <Button size="lg" outline>
      Browse all components
      &nbsp;
      <Icon icon="arrow-right"/>
    </Button>
  </Link>
  </div>
  <div class="hero-image">
    <img
      src="../assets/images/hero_deliveries.svg">
  </div>
</View>

<style lang="scss">
@import '../assets/scss/variables.scss';

.index-view {

  .site-view-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .hero-intro {
    flex: 1 0 700px;
    max-width: 700px;
    img {
      max-width: 64px;
    }

    .logo-name {
      span span {
        color: $primary-color;
      }
    }

    .text-hero {
      font-size: 45px !important;
    }
  }

  .hero-image {
    flex: 1;
    position: relative;

    img {
      position: absolute;
      width: 600px;
      margin-left: -100px;
    }
  }
}
</style>

