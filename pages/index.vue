<script lang="ts" setup>
const { navigation } = useContent()

function hashLink(path:string) { 
  return `${path.replace('/','')}`
}
</script>

<template>
  <div>
    <section v-for="link of navigation" :id="hashLink(link._path)" :key="link._path">
      <Container>
        <ContentDoc :path="link._path" :head="false" />
      </Container>
    </section>
  </div>
</template>

<style scoped lang="ts">
css({
  section: {
    paddingTop: '{space.2}',
    paddingBottom: '{space.2}'
  },
  'section:nth-child(even)': {
    backgroundColor: 'inherit',
    '@dark': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)'
    }
  },
  'section:nth-child(odd)': {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    '@dark': {
      backgroundColor: 'inherit'
    }
  }
})
</style>