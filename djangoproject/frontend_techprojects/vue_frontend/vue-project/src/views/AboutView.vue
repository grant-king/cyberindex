<template>
  <div>
    <AboutHeader :heading_content="heading_1" />
    <AboutHeader :heading_content="heading_2" />
    <AboutHeader :heading_content="heading_3" />
    <AboutHeader :heading_content="heading_4" />
    <AboutHeader :heading_content="heading_5" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AboutHeader from '@/components/AboutHeader.vue';

const heading_1 = {
  eyebrow: 'connecting the dots',
  title: 'Enhancing access to open software projects for humanity.',
  description: 'The Civic Technology Projects Index is a dynamic platform and API dedicated to making civic technology more discoverable, accessible, and connected. We serve as a specialized auxillary publication where open civic tech initiatives can easily be shared and discovered.'
}

const heading_2 = {
  eyebrow: 'reducing friction',
  title: 'Our Mission',
  description: 'We believe that civic technology - software built to serve communities and enhance civic engagement - should be more accessible. These projects that influence vital community systems must be connected to more vectors that will encourage more rapid and aligned improvment.'
}

const heading_3 = {
  eyebrow: 'building, bridging',
  title: 'Our Vision',
  description: 'We envision a world where civic technology is easily discoverable, accessible, and connected. We believe that by making civic tech projects more visible and discoverable, we can help communities find and implement solutions that will benefit them. We also believe that by connecting civic tech projects to an audience of attentive developers, we can help work towards a more efficient and extensive civic technology ecosystem. This will help these passionate developers be more aware of the ways that they can contribute to maximize the value of their work for communities in need.'
}

const heading_4 = {
  eyebrow: 'that\'ll do',
  title: 'What We Do',
  description: 'We provide a platform and API for civic tech projects to be shared and discovered. We connect projects, developers, and communities to foster collaboration and innovation. Through our sponsor network, we help registered organizations reach a wider audience and gain additional resources while directly supporting our mission to improve accessiblity and growth for all civic projects.'
}

const heading_5 = {
  eyebrow: 'but wait, why?',
  title: 'Why It Matters',
  description: 'Across the world, communities are facing absurd challenges and misaligned wasteful processes that could be addressed by civic technology. Too often, valuable civic tech projects remain hidden in scattered repositories, making it difficult for communities to find and implement solutions that could benefit them. The Tech Projects Index exists to help mitigate these connectivity issues.'
}

const heading_6 = {
  eyebrow: 'you too?',
  title: 'We are also a civic tech project!',
  description: 'We are a civic tech project ourselves, and we are always looking for ways to grow. You can contribute to this project directly with a pull request, or you can copy this project and host your own index that can be specific to your language, region, or interest. Use our API to populate your custom platform\'s database.'
}

</script>