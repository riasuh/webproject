export const data = JSON.parse("{\"key\":\"v-4b4b8c2c\",\"path\":\"/one.html\",\"title\":\"One\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1661967132000,\"contributors\":[{\"name\":\"riasuh\",\"email\":\"milo099sas@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"one.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
