import mlMount from '../../utils/ml-mount-body'
import message from './message.vue'

const $message = (options = {}) => {
  mlMount({ component: message, options })
}
$message.error = (options = {}) => {
  mlMount({ component: message, options: Object.assign(options, { type: 'error' }) })
}
$message.success = (options = {}) => {
  mlMount({ component: message, options: Object.assign(options, { type: 'success' }) })
}
$message.warning = (options = {}) => {
  mlMount({ component: message, options: Object.assign(options, { type: 'warning' }) })
}
$message.info = (options = {}) => {
  mlMount({ component: message, options })
}
export default $message
