<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
const { navigation } = useContent()
const router = useRouter()

const titles = computed(
  () => navigation.value.map((link: { title: string; }) => link.title.length ? link.title : "Indo-Global Chamber of Commerce")
)
const hashes = computed(
  () => navigation.value.map((link: { _path: string; }) => link._path.replace('/', ''))
)
const activeSection = ref("")

const handleScroll = () => {
  activeSection.value = "";
  // Prevent link highlight & setting page title if not root
  if (router.currentRoute.value.path != "/") return;

  // Ignore first section
  for (let i = 1; i <= hashes.value.length; i++) {
    const el = document.getElementById(hashes.value[i]);
    if (el == null) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= 75 && rect.bottom >= 75) {
      activeSection.value = hashes.value[i];
      useHead({ title: titles.value[i] })
      break;
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setInterval(handleScroll, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const emits = defineEmits(['linkClick'])

function handleClick() {
  emits('linkClick')
}

function convertToLink(path: string) {
  // Replace first section with custom link
  if (path == '/') return { path: '/', hash: '#about-us' };
  return { path: '/', hash: `#${path.replace('/', '')}Link` };
}
</script>

<template>
  <nav>
    <ul>
      <li v-for="link of navigation" :key="link._path">
        <NuxtLink :to="convertToLink(link._path)" :class="{ active: link._path.replace('/', '') === activeSection }"
          @click="handleClick">
          <span class="underline-fx" />
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="ts">
css({
  nav: {
    ul: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      gap: '{space.4}',
      '@md': {
        flexDirection: 'row',
        gap: '{space.8}',
      },
      a: {
        position: 'relative',
        '&.active': {
          color: '{color.primary.500}'
        },
        '.underline-fx': {
          position: 'absolute',
          bottom: '-4px',
          width: 0,
          height: '1px',
          backgroundColor: 'currentColor',
          transition: 'width 200ms ease-in-out',
          'a:hover &&': {
            width: '100%'
          }
        }
      },

    }
  }
})
</style>
