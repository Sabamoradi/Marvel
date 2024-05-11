import createServices from '~/service/services'

export default (ctx, inject) => {
  inject('services', createServices(ctx.$axios, ctx.$http))
}
