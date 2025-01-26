<template>
  <BasicHeader eyebrow="About" title="Technodex" description="Technodex is a community platform for connecting resources to individuals who are working on community civic tehnology projects." />
  <div class="min-h-32 bg-gradient-to-b from-black via-black to-white/50"></div>
  <div class="bg-white/50">
    <div class="pb-32">
      <AboutHeader :heading_content="heading_1" />
      <AboutHeader :heading_content="heading_2" />
      <AboutHeader :heading_content="heading_3" />
      <AboutHeader :heading_content="heading_4" />
      <AboutHeader :heading_content="heading_5" />
      <AboutHeader :heading_content="heading_6" />
    </div>
    <div class="border-dotted border-t-8 border-b-4 min-h-16"></div>
    <div class="pb-32">
      <AboutHeader :heading_content="heading_7" />
      <AboutHeader :heading_content="heading_7b" />
      <AboutHeader :heading_content="heading_8" />
      <AboutHeader :heading_content="heading_9" />
      <AboutHeader :heading_content="heading_10" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import AboutHeader from '@/components/AboutHeader.vue';
import BasicHeader from '@/components/BasicHeader.vue';

const heading_1 = {
  eyebrow: 'connecting the dots',
  title: 'Enhancing access to open software projects for humanity.',
  description: 'The Civic Technology Projects Index serves as a specialized discovery platform and API dedicated to making civic technology more accessible and connected. We aggregate civic tech initiatives into a central publication where solutions can be easily shared, found, and improved upon.'
}

const heading_2 = {
  eyebrow: 'reducing friction',
  title: 'Our Mission',
  description: 'Civic technology - software built to serve communities and enhance civic engagement - must be more accessible and better connected. These projects influence vital community systems, and improving their discoverability creates more vectors for rapid, aligned advancement of solutions that matter.'
}

const heading_3 = {
  eyebrow: 'building bridges',
  title: 'Our Vision',
  description: 'We envision an ecosystem where civic technology projects are readily discoverable and naturally connected to their optimal audience. By increasing visibility and providing structured access, we help communities find proven solutions while enabling developers to contribute where their expertise will have maximum impact. This targeted connection between problems and problem-solvers accelerates the development of solutions for communities in need.'
}

const heading_4 = {
  eyebrow: 'making it happen',
  title: 'What We Do',
  description: 'Our platform and API create a hub where civic tech projects can be systematically shared and discovered. We facilitate connections between projects, developers, and communities to enable efficient collaboration. Through our sponsor network, we help organizations expand their reach while directly supporting improved accessibility for all civic projects.'
}

const heading_5 = {
  eyebrow: 'the challenge',
  title: 'Why It Matters',
  description: 'Communities worldwide face systemic challenges that could be addressed through civic technology. However, valuable solutions often remain isolated in scattered repositories, creating unnecessary barriers between problems and their solutions. The Tech Projects Index exists to bridge these gaps, turning isolated efforts into connected solutions.'
}

const heading_6 = {
  eyebrow: 'join us',
  title: 'We are a civic tech project, too.',
  description: 'As a civic tech project, we embrace open collaboration. You can contribute directly through pull requests, fork our project to create specialized indexes for your region or domain, or use our API to power your own civic tech discovery platform. Our success is measured by how effectively we help connect solutions with communities.'
}

const heading_7 = {
  eyebrow: 'simple process',
  title: 'Project Registration',
  description: 'Adding your project is straightforward - just share your GitHub repository URL. Our system automatically extracts project details, metrics, and documentation. No account required for basic submissions, though sponsors gain access to advanced tools for managing multiple projects and organizations.'
}

const heading_7b = {
  eyebrow: 'simple process',
  title: 'No accounts, no logins',
  description: 'This platform doesn’t provide persistant accounts for everyday users. It still provides a customized experience for all, by storing a temporary key on your device (cookies).'
}

const heading_8 = {
  eyebrow: 'powerful tools',
  title: 'Features for Organizations',
  description: 'Sponsors and organizations gain access to specialized tools including public message publication, dynamic sponsor account control interface, and customized analytics.'
}

const heading_9 = {
  eyebrow: 'technical details',
  title: 'Integration & Access',
  description: 'Access our index through our web interface or API. We maintain current GitHub metrics, project health indicators, and engagement statistics. Developers can integrate our API into their own platforms, creating specialized civic tech discovery experiences for their communities.'
}

const heading_10 = {
  eyebrow: 'how IT works',
  title: 'Project Locations',
  description: 'You are encouraged to use a location or locations for your project. This will help our system organize projects in a super simple way that is most useful to users.'
}

</script>