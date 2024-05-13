<script setup lang="ts">
import { data } from "../../../yaml.data";
</script>

<template>
  <div v-for="(section, sectionName) in data.sections" :key="sectionName">
    <h1>{{ sectionName }}</h1>
    <div v-if="section.meta && section.meta.container" :class="['custom-block', section.meta.container.type]">
      <p class="custom-block-title">{{ section.meta.container.type }}</p>
      <p>{{ section.meta.container.message }}</p>
    </div>
    <ul>
      <li v-for="(link, index) in section.links" :key="index">
        <template v-if="link.description || (link.related && link.related.length)">
          <a :href="link.link" :class="link.metadata">{{ link.name }}</a>
          <template v-if="link.related && link.related.length">
            <span v-if="link.related.length > 1">, </span>
            <span v-for="(relatedLink, relatedIndex) in link.related" :key="relatedIndex">
              <a :href="relatedLink.link" :class="relatedLink.metadata">{{
                relatedLink.name
                }}</a>
              <span v-if="relatedIndex !== link.related.length - 1">, </span>
            </span>
          </template>
          <span v-if="link.description"> - {{ link.description }}</span>
        </template>
        <template v-else>
          <a :href="link.link" :class="link.metadata">{{ link.name }}</a>
        </template>
        <template v-if="link.additional && link.additional.length">
          <span> / </span>
          <template v-for="(additionalLink, additionalIndex) in link.additional" :key="additionalIndex">
            <a :href="additionalLink.link" :class="additionalLink.metadata">
              {{ additionalLink.name }}
            </a>
            <span v-if="additionalIndex !== link.additional.length - 1">
              /
            </span>
          </template>
        </template>
      </li>
    </ul>
    <div v-if="section.subsections">
      <div v-for="(subsection, subsectionName) in section.subsections" :key="subsectionName">
        <h2>{{ subsectionName }}</h2>
        <div v-if="subsection.meta && subsection.meta.container"
          :class="['custom-block', subsection.meta.container.type]">
          <p class="custom-block-title">{{ subsection.meta.container.type }}</p>
          <p>{{ subsection.meta.container.message }}</p>
        </div>
        <ul>
          <li v-for="(link, index) in subsection.links" :key="index">
            <template v-if="link.description || (link.related && link.related.length)">
              <a :href="link.link" :class="link.metadata">{{ link.name }}</a>
              <template v-if="link.related && link.related.length">
                <span v-if="link.related.length > 1">, </span>
                <span v-for="(relatedLink, relatedIndex) in link.related" :key="relatedIndex">
                  <a :href="relatedLink.link" :class="relatedLink.metadata">{{
                    relatedLink.name
                    }}</a>
                  <span v-if="relatedIndex !== link.related.length - 1">,
                  </span>
                </span>
              </template>
              <span v-if="link.description"> - {{ link.description }}</span>
            </template>
            <template v-else>
              <a :href="link.link" :class="link.metadata">{{ link.name }}</a>
            </template>
            <template v-if="link.additional && link.additional.length">
              <span> / </span>
              <template v-for="(additionalLink, additionalIndex) in link.additional" :key="additionalIndex">
                <a :href="additionalLink.link" :class="additionalLink.metadata">
                  {{ additionalLink.name }}
                </a>
                <span v-if="additionalIndex !== link.additional.length - 1">
                  /
                </span>
              </template>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
