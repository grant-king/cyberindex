<template>
  <BasicHeader eyebrow="About" title="MYCTP.org"
    description="My Community Technology Platform is a system for connecting resources to individuals who are working on community civic tehnology projects. Now WIP, pre-pre alpha. Proceed with grace." />
  <div class="min-h-32 bg-gradient-to-t from-black via-black to-white/50"></div>
  <div class="min-h-32 bg-gradient-to-b from-black via-black to-white/50"></div>
  <div class="bg-white/50 pt-16">
    <div class="border-dotted border-4 bg-white/5 p-4">
      <a href="https://grant-king.github.io/cyberindex/">
        <div>
          For a comprehensive overview of this system in a familair format
        </div>
        <div
          class="px-1 text-3xl bg-clip-text text-white/80 font-extrabold bg-cover bg-[url('https://unrolla.blob.core.windows.net/unrolla/images/image_1-coral_2461.webp')]">
          go to docs website
        </div>
        <div>
          For a comprehensive overview of this system in a familair format
        </div>
      </a>
    </div>
    <div class="pb-32">
      <AboutHeader :heading_content="heading_1" />
      <AboutHeader :heading_content="heading_2" />
      <AboutHeader :heading_content="heading_3" />
      <AboutHeader :heading_content="heading_4" />
      <AboutHeader :heading_content="heading_5" />
      <AboutHeader :heading_content="heading_6" />
    </div>
    <div class="min-h-32 bg-gradient-to-t from-black via-black to-lime-400/50"></div>
    <div class="min-h-32 bg-gradient-to-b from-black via-black to-lime-400/50"></div>
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
  title: 'A community-driven outlet for open software',
  description: 'My Community Technology Platform serves as a specialized community platform dedicated to making open technology more accesible and connected. Users submit their favorite projects to our list to be aggregated into a central publication where solutions can be easily shared and discovered.'
}

const heading_2 = {
  eyebrow: 'reducing friction',
  title: 'Our Mission',
  description: 'Community technology - projects built to serve communities and enhance civic engagement - can have more outlets for accesibility and connectivity. These projects can influence vital community systems, and improving their discoverability creates more vectors for rapid, aligned advancement of solutions that matter.'
}

const heading_3 = {
  eyebrow: 'building bridges',
  title: 'Our Vision',
  description: 'We envision an ecosystem where passionate developers can list or discover civic technology projects, while contributing to communal goals and having meaningful interactions within this like-minded community in unique ways.'
}

const heading_4 = {
  eyebrow: 'making it happen',
  title: 'What We Do',
  description: 'Our platform and API create an outlet where open projects can be shared and discovered within a niche community. The platform is reproducable, and can be applied to other niche communities.'
}

const heading_5 = {
  eyebrow: 'the challenge',
  title: 'Why It Matters',
  description: 'Communities worldwide face systemic challenges that could be addressed through cutting edge technology. Sometimes valuable solutions remain isolated in scattered repositories, creating unnecessary barriers between problems and their solutions. My Community Technology Platform exists as an example of one way to fill in the gaps.'
}

const heading_6 = {
  eyebrow: 'join us',
  title: 'We are a community tech project, too.',
  description: 'As a open source project, we embrace collaboration. You can contribute directly through pull requests, fork our project to create specialized indexes for your region or domain, or use our API to power your own civic tech discovery platform. Our success is measured by how effectively we help connect solutions with communities.'
}

const heading_7 = {
  eyebrow: 'simple process',
  title: 'Project Registration',
  description: 'Adding your project is straightforward - just share your GitHub repository URL. Our system automatically extracts project details, metrics, and documentation.'
}

const heading_7b = {
  eyebrow: 'simple process',
  title: 'No accounts, no logins',
  description: 'This platform doesn’t provide persistant accounts for everyday users. It still provides a customized experience for all, by storing a temporary key on your device (cookies).'
}

const heading_8 = {
  eyebrow: 'special tools',
  title: 'Features for Organizations',
  description: 'Sponsors and organizations gain access to specialized tools including public message publication, dynamic sponsor account control interface, and customized analytics.'
}

const heading_9 = {
  eyebrow: 'technical details',
  title: 'Integration & Access',
  description: 'Access our index through our web interface or API. We maintain current GitHub metrics, project health indicators, and engagement statistics. Developers can integrate our API into their own platforms, creating specialized civic tech discovery experiences for their communities.'
}

</script>