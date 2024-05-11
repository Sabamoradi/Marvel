

export default function ({ store, $axios, redirect, app, route }) {
  
$axios.onRequest((config) => {
    // config.headers = {
    // }

  })
  $axios.onError((error) => {
    if (error.message.includes('timeout')) {
      app.$nuxt.error({ statusCode: 408, message: 'ApiTimeOut' })
      console.log('YES =>>' + error)
    }
  })
}
